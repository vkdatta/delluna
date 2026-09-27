export const name="broadcast_on_personal";
export const id="dl_a3a11a5dd5db8683609a";
export const url=new URL("../icons/broadcast_on_personal.svg?v=23751d8d6539ac0d6823c3317761276b468c0edc553d6e91ca71fb2473876397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
