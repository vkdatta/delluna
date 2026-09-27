export const name="cloud_lock-fill";
export const id="dl_829dd15d65a3e5c9f30b";
export const url=new URL("../icons/cloud_lock-fill.svg?v=b1d5b3876e7f7dc5ab29ea3dae6e43ac737901b44a98bd70a9175e874d0b3974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
