export const name="flip-vertical-bold";
export const id="dl_d6e878cc66dd44f9ac28";
export const url=new URL("../icons/flip-vertical-bold.svg?v=da2a59f8deec1523648cf33cac1f8c88d2de42060a64f155b41a3f9f916a4bcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
