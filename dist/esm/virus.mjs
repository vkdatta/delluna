export const name="virus";
export const id="dl_c25f8c197e3e49f0afc8";
export const url=new URL("../icons/virus.svg?v=824fbc61ae86cfd65f5537b9d47ed30597265e54c0a2f9471b195ad5565ed4eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
