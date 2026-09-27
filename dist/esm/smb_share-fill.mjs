export const name="smb_share-fill";
export const id="dl_6aa65106aa1dc4873c16";
export const url=new URL("../icons/smb_share-fill.svg?v=d2f989d583195272dc259b808872bfe508e0e520f61eb49bac392cd9b39d9bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
