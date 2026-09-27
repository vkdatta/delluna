export const name="user-plus-fill";
export const id="dl_3a8b37b859d005b6e6b3";
export const url=new URL("../icons/user-plus-fill.svg?v=c83c7cc56944f9a2f32a8bd07231074e5cc8d6a536d247fed87a2c86608a7075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
