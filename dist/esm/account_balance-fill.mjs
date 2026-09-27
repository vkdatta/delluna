export const name="account_balance-fill";
export const id="dl_e268ea01b834597edc85";
export const url=new URL("../icons/account_balance-fill.svg?v=dd7e14124e3a4f86d82d7395485a9f7c6cffb69a466c28f3b1b93eff98d5db3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
