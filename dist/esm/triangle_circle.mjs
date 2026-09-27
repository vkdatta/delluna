export const name="triangle_circle";
export const id="dl_90a596c52958e416478e";
export const url=new URL("../icons/triangle_circle.svg?v=e980f8706dd9909f32e598f63e3791ada71e746e6f06b27eeb330aeb2cc56ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
