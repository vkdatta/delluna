export const name="hash-fill";
export const id="dl_4adda1a91d5f4e75b29e";
export const url=new URL("../icons/hash-fill.svg?v=bde39c3b51ac314fa4ac41e1cd96be225f03de37b886e291739eacd1709857dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
