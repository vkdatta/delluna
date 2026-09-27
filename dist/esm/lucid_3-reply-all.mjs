export const name="lucid_3-reply-all";
export const id="dl_6ed1c8b4639c47f28ae6";
export const url=new URL("../icons/lucid_3-reply-all.svg?v=b4779f843beddbda6e969985d699546237d2ee9f5d6f5918a0b8a2830a9fb9e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
