export const name="lucid_1-cast";
export const id="dl_c4b2242229d4469580d4";
export const url=new URL("../icons/lucid_1-cast.svg?v=86b6d8deaeaeb8ebdcdf0f0f9985e9f5fb0f39638c0d236c5a29392151cbf2ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
