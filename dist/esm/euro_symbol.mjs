export const name="euro_symbol";
export const id="dl_db3c1741d4144ebeb55f";
export const url=new URL("../icons/E/euro_symbol.svg?v=21e75a0aa1070abbc9baf233000367b9913663cd24da1056898b3584d04eb626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
