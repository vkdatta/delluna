export const name="account_balance";
export const id="dl_4ae8ecfa906d48fbac03";
export const url=new URL("../icons/A/account_balance.svg?v=fdc536f6f4c5d2b8dd4a5ee71d4316b011157bdd3144fcb1e2c2c7891119c35c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
