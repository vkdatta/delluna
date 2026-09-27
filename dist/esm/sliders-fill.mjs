export const name="sliders-fill";
export const id="dl_0338c50f09e81ff7856d";
export const url=new URL("../icons/sliders-fill.svg?v=f6ff43c6ccab6d14b4065e43eb9ba67f0cb52b2b896bd7a6fb917d3493dc920e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
