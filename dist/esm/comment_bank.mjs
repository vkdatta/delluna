export const name="comment_bank";
export const id="dl_6c2b878b67a949e59a8f";
export const url=new URL("../icons/comment_bank.svg?v=82421c512eede36590945ae14921e1484c4eaf455679e5245e2565377489f57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
