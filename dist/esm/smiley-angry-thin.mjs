export const name="smiley-angry-thin";
export const id="dl_a58f0a92622d76733d21";
export const url=new URL("../icons/smiley-angry-thin.svg?v=f7e40b3c272d75762637db9e239f96f62a372719e8f27b46c25480fa99e6ec9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
