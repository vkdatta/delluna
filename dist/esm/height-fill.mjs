export const name="height-fill";
export const id="dl_a843ddf41a6ec0a2c0d3";
export const url=new URL("../icons/height-fill.svg?v=97c9b119b1aef0cef820b0e264ab0655d662e38e683ad604c9a4f2b04d6bf5e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
