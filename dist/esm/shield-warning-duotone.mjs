export const name="shield-warning-duotone";
export const id="dl_96c08f28587be9d26141";
export const url=new URL("../icons/shield-warning-duotone.svg?v=823c6b4a0de8f35fe28daff5ee7e8500748d70ded4aca34ac8c2c1ba700888e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
