export const name="lock_person-fill";
export const id="dl_7afd523dd6a17555af7f";
export const url=new URL("../icons/lock_person-fill.svg?v=6e0fc2ddee11593762fb9b12fca0b73ef2dbb17c31a9d685e1109076db40b6b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
