export const name="family_history-fill";
export const id="dl_86da89e1d5c535658fc8";
export const url=new URL("../icons/family_history-fill.svg?v=7111c7b5434c7a57fe1d6ad1439c20585ce21f0f338065f64111c34d33f13322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
