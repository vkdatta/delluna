export const name="scale-fill";
export const id="dl_7af2299469ad14c93f40";
export const url=new URL("../icons/scale-fill.svg?v=d879566fd17231eb1ee91b2d498d6185890a5c4050f70e5133f32a0a5cf22096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
