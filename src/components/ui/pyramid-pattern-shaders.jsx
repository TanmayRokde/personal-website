import React, { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

const vertexShaderSource = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fragmentShaderSource = `
precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform float u_speed;
uniform float u_scale;
uniform float u_offsetRows;
uniform float u_bumpStrength;
uniform float u_hatchIntensity;
uniform float u_lightMovement;

mat2 rot2(in float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float hash21(vec2 p){  return fract(sin(dot(p, vec2(27.619, 57.583)))*43758.5453); }
vec2 cellID;
vec2 hash22B(vec2 p) {
    float n = sin(dot(p, vec2(41.0, 289.0)));
    return fract(vec2(262144.0, 32768.0)*n)*2.0 - 1.0;
}
float n2D3G( in vec2 p ){
    vec2 i = floor(p); p -= i;

    vec4 v;
    v.x = dot(hash22B(i), p);
    v.y = dot(hash22B(i + vec2(1.0, 0.0)), p - vec2(1.0, 0.0));
    v.z = dot(hash22B(i + vec2(0.0, 1.0)), p - vec2(0.0, 1.0));
    v.w = dot(hash22B(i + 1.0), p - 1.0);
    p = p*p*(3.0 - 2.0*p);

    return mix(mix(v.x, v.y, p.x), mix(v.z, v.w, p.x), p.y);
}
float fBm(vec2 p){ return n2D3G(p)*0.66 + n2D3G(p*2.0)*0.34; }
float bMap(vec2 p){
    p *= rot2(-3.14159/5.0);

    if (u_offsetRows > 0.5) {
        if(mod(floor(p.y), 2.0)<0.5) p.x += 0.5;
    }

    vec2 ip = floor(p);
    p -= ip + 0.5;

    cellID = ip;
    float ang = -3.14159*3.0/5.0 + (fBm(ip/8.0 + iTime/3.0*u_speed))*6.2831*2.0;
    vec2 offs = vec2(cos(ang), sin(ang))*0.35;

    if(p.x<offs.x)  p.x = 1.0 - (p.x + 0.5)/abs(offs.x  + 0.5);
    else p.x = (p.x - offs.x)/(0.5 - offs.x);
    if(p.y<offs.y) p.y = 1.0 - (p.y + 0.5)/abs(offs.y + 0.5);
    else p.y = (p.y - offs.y)/(0.5 - offs.y);
    return 1.0 - max(p.x, p.y);
}
vec3 doBumpMap(in vec2 p, in vec3 n, float bumpfactor, inout float edge){
    vec2 e = vec2(0.025, 0.0);

    float f = bMap(p);
    float fx = bMap(p - e.xy);
    float fy = bMap(p - e.yx);
    float fx2 = bMap(p + e.xy);
    float fy2 = bMap(p + e.yx);

    vec3 grad = (vec3(fx - fx2, fy - fx2, 0.0))/e.x/2.0;

    edge = length(vec2(fx, fy) + vec2(fx2, fy2) - f*2.0);
    edge = smoothstep(0.0, 1.0, edge/e.x);

    grad -= n*dot(n, grad);

    return normalize( n + grad*bumpfactor );
}
float doHatch(vec2 p, float res){
    p *= res/16.0;
    float hatch = clamp(sin((p.x - p.y)*3.14159*200.0)*2.0 + 0.5, 0.0, 1.0);
    float hRnd = hash21(floor(p*6.0) + 0.73);
    if(hRnd>0.66) hatch = hRnd;
    return hatch;
}
void main(){
    float iRes = min(iResolution.y, 800.0);
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord - iResolution.xy*0.5)/iRes;

    vec3 rd = normalize(vec3(uv, 0.5));

    const float gSc = 10.0;
    vec2 p = uv*gSc*u_scale + vec2(0.0, iTime/2.0*u_speed);
    vec2 oP = p;

    float m = bMap(p);

    vec3 n = vec3(0.0, 0.0, -1.0);

    float edge = 0.0, bumpFactor = 0.25*u_bumpStrength;
    n = doBumpMap(p, n, bumpFactor, edge);

    vec3 lp =  vec3(0.0 + sin(iTime*u_lightMovement)*0.3, 0.0 + cos(iTime*1.3*u_lightMovement)*0.3, -1.0) - vec3(uv, 0.0);

    float lDist = max(length(lp), 0.001);
    vec3 ld = lp/lDist;

    float diff = max(dot(n, ld), 0.0);
    diff = pow(diff, 4.0);
    float spec = pow(max(dot(reflect(-ld, n), -rd), 0.0), 16.0);
    float fre = min(pow(max(1.0 + dot(n, rd), 0.0), 4.0), 3.0);

    vec3 col = vec3(0.15)*(diff + 0.251 + spec*vec3(1.0, 0.7, 0.3)*9.0 + fre*vec3(0.1, 0.3, 1.0)*12.0);

    float rf = smoothstep(0.0, 0.35, bMap(reflect(rd, n).xy*2.0)*fBm(reflect(rd, n).xy*3.0) + 0.1);
    col += col*col*rf*rf*vec3(1.0, 0.1, 0.1)*15.0;

    float shade = m*0.83 + 0.17;
    col *= shade;

    col *= 1.0 - edge*0.8;

    float hatch = doHatch(oP/gSc, iRes);
    col *= hatch*0.5*u_hatchIntensity + (1.0 - u_hatchIntensity*0.5);

    col = mix(vec3(0.09, 0.22, 0.32), vec3(0.08, 0.88, 0.96), clamp(col*2.8, 0.0, 1.0));
    col += vec3(0.12, 0.18, 0.22);

    gl_FragColor = vec4(min(col*1.4, 1.0), 1.0);
}
`

function compileShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader)
    gl.deleteShader(shader)
    throw new Error(`Could not compile shader:\n${info}`)
  }
  return shader
}

function createProgram(gl, vertexSrc, fragmentSrc) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc)
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program)
    gl.deleteProgram(program)
    throw new Error(`Could not link program:\n${info}`)
  }
  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)
  return program
}

const PyramidPatternShaders = ({
  className,
  speed = 1,
  scale = 1,
  offsetRows = 1,
  bumpStrength = 1,
  hatchIntensity = 1,
  lightMovement = 1,
  ...props
}) => {
  const canvasRef = useRef(null)
  const rafRef = useRef()
  const resizeObserverRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: true, preserveDrawingBuffer: true })
    if (!gl) return

    let program
    try {
      program = createProgram(gl, vertexShaderSource, fragmentShaderSource)
    } catch (err) {
      console.error('Shader compilation error', err)
      return
    }

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const timeUniform = gl.getUniformLocation(program, 'iTime')
    const resolutionUniform = gl.getUniformLocation(program, 'iResolution')
    const speedUniform = gl.getUniformLocation(program, 'u_speed')
    const scaleUniform = gl.getUniformLocation(program, 'u_scale')
    const offsetUniform = gl.getUniformLocation(program, 'u_offsetRows')
    const bumpUniform = gl.getUniformLocation(program, 'u_bumpStrength')
    const hatchUniform = gl.getUniformLocation(program, 'u_hatchIntensity')
    const lightUniform = gl.getUniformLocation(program, 'u_lightMovement')

    gl.useProgram(program)
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const start = performance.now()

    const setUniforms = (width, height) => {
      gl.uniform2f(resolutionUniform, width, height)
      gl.uniform1f(speedUniform, speed)
      gl.uniform1f(scaleUniform, scale)
      gl.uniform1f(offsetUniform, offsetRows)
      gl.uniform1f(bumpUniform, bumpStrength)
      gl.uniform1f(hatchUniform, hatchIntensity)
      gl.uniform1f(lightUniform, lightMovement)
    }

    const render = (timestamp) => {
      const elapsed = (timestamp - start) / 1000
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
        setUniforms(width, height)
      }

      gl.uniform1f(timeUniform, elapsed)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      rafRef.current = requestAnimationFrame(render)
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        canvas.width = Math.round(width)
        canvas.height = Math.round(height)
        gl.viewport(0, 0, canvas.width, canvas.height)
        setUniforms(canvas.width, canvas.height)
      }
    })
    observer.observe(canvas)
    resizeObserverRef.current = observer

    rafRef.current = requestAnimationFrame(render)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect()
      gl.deleteProgram(program)
      gl.deleteBuffer(buffer)
    }
  }, [speed, scale, offsetRows, bumpStrength, hatchIntensity, lightMovement])

  return (
    <div className={cn('relative h-full w-full', className)} {...props}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

export default PyramidPatternShaders
