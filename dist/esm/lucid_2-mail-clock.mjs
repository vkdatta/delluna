export const name="lucid_2-mail-clock";
export const id="dl_0df6af0f288a4c43b5c4";
export const url=new URL("../icons/lucid_2-mail-clock.svg?v=52b13d76499812bf5e0abf653ef13df4a413e57746a630dce6bc2189e152458d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
