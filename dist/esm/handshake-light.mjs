export const name="handshake-light";
export const id="dl_f362a5db5d80490ab85e";
export const url=new URL("../icons/handshake-light.svg?v=a1b6fbf1c32b1c85f746ba7be8e7ff8bd2321d8d61f058829c85cc64f050a192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
