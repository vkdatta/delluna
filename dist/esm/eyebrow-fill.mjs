export const name="eyebrow-fill";
export const id="dl_3084bdddced76aea8548";
export const url=new URL("../icons/eyebrow-fill.svg?v=9d0a737463a62db2806f26c09b6d471cafe067573d62f7f8d3733db64f06a8ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
