export const name="switch_account-fill";
export const id="dl_6ab6bb6324e0984ad1bd";
export const url=new URL("../icons/switch_account-fill.svg?v=f546e8f26b969259d64e381a9e1edd6c32f424d193e5f8e3aefe9b849596f79e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
