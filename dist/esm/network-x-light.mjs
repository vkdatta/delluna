export const name="network-x-light";
export const id="dl_4a70caf25978447e8b84";
export const url=new URL("../icons/network-x-light.svg?v=3ae15a730a2f9cf0dc658f8b6d3b0e6cce138b0378ae9e1cfb874e7aadc32265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
