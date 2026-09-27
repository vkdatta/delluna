export const name="macro_auto-fill";
export const id="dl_1d4df5dc0b3a6eada189";
export const url=new URL("../icons/macro_auto-fill.svg?v=2b5624e710fe0cc88d76744823cd363e5322538e50735b4d8ae51fefaf834a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
