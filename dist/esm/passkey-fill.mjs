export const name="passkey-fill";
export const id="dl_750edc88a797e510737c";
export const url=new URL("../icons/passkey-fill.svg?v=4cc90db1e38897c7302fc36b74ae3963aa1dd9aa426d7e41de9ffb5851764447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
