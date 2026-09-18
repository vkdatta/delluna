export const name="local_atm-fill";
export const id="dl_cf47428ea6f444a2b740";
export const url=new URL("../icons/L/local_atm-fill.svg?v=87bd852e9767a1a09a6e0539b72bcda5a09a320e8a30fa7283e1ef9037f210d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
