export const name="owl-fill";
export const id="dl_49743cd86c1ed4a6b3e6";
export const url=new URL("../icons/owl-fill.svg?v=73d193d4abf3d0b623392cd453cf065910acac95338796a0ddca75f968dc9dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
