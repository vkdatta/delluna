export const name="comment_bank";
export const id="dl_d28d676f77dde8756256";
export const url=new URL("../icons/comment_bank.svg?v=61c5b7363462845d6211d4f7006b53a1a99530ab3fd1f493bcfa7ec42840f0d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
