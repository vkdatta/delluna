export const name="microphone-light";
export const id="dl_33f9f9fa7fea457eb481";
export const url=new URL("../icons/microphone-light.svg?v=eb682ba3fc12a508ce2e8d88854187adca286604d2ca1c96f303e30f553206cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
