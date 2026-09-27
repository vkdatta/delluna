export const name="perm_phone_msg-fill";
export const id="dl_9a49ea32815421b61abc";
export const url=new URL("../icons/perm_phone_msg-fill.svg?v=bef06b9bb2f5a87a59c168a87fc1fba881126836daf1057ebef47eb1ce0c545f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
