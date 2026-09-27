export const name="manage_accounts";
export const id="dl_40bd73719acffa859d5f";
export const url=new URL("../icons/manage_accounts.svg?v=2f7d4d9f6ff7c9d8dbf0193c0836e7e5d2c436d3f11f12a79f28693a963529dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
