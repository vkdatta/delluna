export const name="lucid_3-megaphone-off";
export const id="dl_21f3b1e927e743d09139";
export const url=new URL("../icons/lucid_3-megaphone-off.svg?v=5a83be997f39709cc14a723be4dcc0b2c1000ec01a9d7bdecd35f0e0748734ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
