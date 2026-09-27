export const name="order_approve";
export const id="dl_9b6a4ac33558549a018e";
export const url=new URL("../icons/order_approve.svg?v=5d078fa510871c52db197fd8582e5d5ed3d96b887aa1dd62bc0c2e97a9e70e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
