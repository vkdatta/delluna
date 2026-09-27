export const name="arrow-fat-down";
export const id="dl_e738cb94a79448c2907f";
export const url=new URL("../icons/arrow-fat-down.svg?v=299622ad1645e52afc80f670374b25d0e210f13c6563594c3b7ff6a5ccae7dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
