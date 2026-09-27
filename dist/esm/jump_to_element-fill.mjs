export const name="jump_to_element-fill";
export const id="dl_c93c1c91b3e6c85d575b";
export const url=new URL("../icons/jump_to_element-fill.svg?v=3af9706f3f33b45bd13effa7ecbb1db79da04d5e6865bf48a15a40570cb4b9ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
