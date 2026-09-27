export const name="users-light";
export const id="dl_033e11048bb721d0e620";
export const url=new URL("../icons/users-light.svg?v=b7dd9fd818f40c962bbedeefee9b35fc9f5b58b2182aa9fb550ce1855ae86af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
