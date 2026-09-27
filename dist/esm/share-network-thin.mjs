export const name="share-network-thin";
export const id="dl_75b600b2ef03ab0b6165";
export const url=new URL("../icons/share-network-thin.svg?v=8b44a20f188ec2df5d76d44b2f2b89115031e427dd0ce27f659642dcbef8e48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
