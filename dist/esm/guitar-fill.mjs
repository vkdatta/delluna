export const name="guitar-fill";
export const id="dl_7084c5a0b58f43e98539";
export const url=new URL("../icons/guitar-fill.svg?v=8d837ea07ba83119ce7ba7548a0d4b37d071b7603875ba49dd13825b9ffc656e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
