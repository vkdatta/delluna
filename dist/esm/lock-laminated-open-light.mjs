export const name="lock-laminated-open-light";
export const id="dl_b5ea0ae1e75a4e37a508";
export const url=new URL("../icons/lock-laminated-open-light.svg?v=51671fbc6d012e023325c82c592096ea4a6e9721faa70c8611796c3a91cdc742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
