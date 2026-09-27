export const name="perm_phone_msg-fill";
export const id="dl_dcc59a4baaebc8c71e13";
export const url=new URL("../icons/perm_phone_msg-fill.svg?v=40070c679a2ed4a46801e4aaaa27a2e6edc6dcf68371fa44d7b3adc3f8606ad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
