export const name="account_box-fill";
export const id="dl_cac4f02c4d859c06b516";
export const url=new URL("../icons/account_box-fill.svg?v=30e1bc28bc01f35d97ab985c79ecc5cbc3030f7c0bfdbea1ea5fce6c9ec83022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
