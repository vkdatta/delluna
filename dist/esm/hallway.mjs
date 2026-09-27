export const name="hallway";
export const id="dl_b9e4443a531be523c1b5";
export const url=new URL("../icons/hallway.svg?v=d918bc1b33f2474fadee3ba572f30e75688ad870661bebafaf0226239d9b5264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
