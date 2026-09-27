export const name="swatches-light";
export const id="dl_18da3c8fc8f0ba7694a7";
export const url=new URL("../icons/swatches-light.svg?v=f59dd9611d42612957261cca1cd83d057b6726b1563893d60f88b9e0e30f0dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
