export const name="universal_currency";
export const id="dl_ea2b89ca41b53a4edf2e";
export const url=new URL("../icons/universal_currency.svg?v=fd1969aa83124b94592eaeca4c3b5bc1d378ecbe4d9ca37391426282b005b262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
