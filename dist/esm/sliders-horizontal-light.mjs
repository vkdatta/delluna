export const name="sliders-horizontal-light";
export const id="dl_f0877ddbd0d89704190c";
export const url=new URL("../icons/sliders-horizontal-light.svg?v=ba596472e56466968dded34d95b4778cd68c4a008a87fb30ed43d17e92c11d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
