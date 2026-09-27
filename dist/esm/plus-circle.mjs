export const name="plus-circle";
export const id="dl_9b54ca5f5d064e3bb206";
export const url=new URL("../icons/plus-circle.svg?v=3a510bf9f6ef4ce7e24393086e63e84c73824d0ab0c348e77bb405e15d930f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
