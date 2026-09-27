export const name="filter_alt-fill";
export const id="dl_2994502dd9fb1dab3618";
export const url=new URL("../icons/filter_alt-fill.svg?v=38ec507fb8094e1b06acb4a443947dae810e0370832a7cae8b04b4823c174c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
