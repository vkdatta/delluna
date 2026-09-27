export const name="lucid_3-message-circle-plus";
export const id="dl_39f9f84326994cb7bddb";
export const url=new URL("../icons/lucid_3-message-circle-plus.svg?v=671f020b02f0fc1b6a317220193ac9ceb6e0f6d81034cc21e51cf4d8176de445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
