export const name="arrow_menu_close";
export const id="dl_3ea2be4cd4f2cde9860c";
export const url=new URL("../icons/arrow_menu_close.svg?v=826667a56138757a381161816f5beef1155a01162b536289e14f3ae1d5d35562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
