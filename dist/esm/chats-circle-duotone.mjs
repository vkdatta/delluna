export const name="chats-circle-duotone";
export const id="dl_d91361b33c9b45dc82d1";
export const url=new URL("../icons/chats-circle-duotone.svg?v=1c168b3d6239f949b34d987321993872ef3f1c181e4c40f9ea20b700818d4c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
