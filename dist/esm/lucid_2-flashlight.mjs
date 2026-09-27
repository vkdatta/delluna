export const name="lucid_2-flashlight";
export const id="dl_bda7add5ad344c37b506";
export const url=new URL("../icons/lucid_2-flashlight.svg?v=d91609c490f8ea719ac98ff035cac5acbf2b57b775d193270b1e389f8823440a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
