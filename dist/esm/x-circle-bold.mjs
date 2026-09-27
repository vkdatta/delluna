export const name="x-circle-bold";
export const id="dl_9f53cc5f55b9549f20ed";
export const url=new URL("../icons/x-circle-bold.svg?v=c2fb120f82007c80b3a6d97e481c42c865fc51331fe2df762dc3e373b352f0f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
