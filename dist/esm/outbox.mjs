export const name="outbox";
export const id="dl_bc7a1e4843e57107d111";
export const url=new URL("../icons/outbox.svg?v=1b91e9babad823db113e4f7a80f00d6d511c484a1f21d0aa224cbe4c6a6f37f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
