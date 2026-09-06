export const name="arrow-circle-left";
export const id="dl_0fcbce7b88294f26adc3";
export const url=new URL("../icons/arrow-circle-left.svg?v=9acd368441a60399210143e0de02a86dc4c04af8e70f314359bdc41effa80b18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
