export const name="utensils";
export const id="dl_6f26f1443cf24a509ac2";
export const url=new URL("../icons/utensils.svg?v=343fffd5c82fbc6ca75d62127e196a918949bb74574570df54fee32c023c3a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
