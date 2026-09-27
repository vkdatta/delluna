export const name="edit_notifications-fill";
export const id="dl_e82cb76290f20de88c4c";
export const url=new URL("../icons/edit_notifications-fill.svg?v=2a421148e5d363db930b6aedb64b1a40b7e00348e925a67d9c456f859f22abf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
