export const name="pizza-light";
export const id="dl_14a5435102c04d9e9557";
export const url=new URL("../icons/pizza-light.svg?v=63a0c4bcc9fd21ac0d468c2ddc06a35a925aaad265c2b0764af43ca84f985a8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
