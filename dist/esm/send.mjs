export const name="send";
export const id="dl_d6cc2c910f9f10666db6";
export const url=new URL("../icons/send.svg?v=c03eedffd340cd238651181b69fe3e1e88cabffab2756ce53f999a372b3c1db0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
