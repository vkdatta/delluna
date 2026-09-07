export const name="user-circle-duotone";
export const id="dl_3c86519f311c40d4b001";
export const url=new URL("../icons/U/user-circle-duotone.svg?v=45c7d9ed8c175d9d1767c9d187c5d86a33b6e874cc1fb93c6d20f1a23019164a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
