export const name="comment_bank";
export const id="dl_a3e7fed5b4b66df4ba5c";
export const url=new URL("../icons/comment_bank.svg?v=d83a18d3b0290be3333b09dbf88c237627d3c8fd93512355c7bd2687ab4d8119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
