export const name="beach_access-fill";
export const id="dl_ffc90a38f2631c68f7c6";
export const url=new URL("../icons/beach_access-fill.svg?v=43dd4eaa80d2f8642ee8d8dbcf1b61cb7b368ff0b30edffe9b21be3f9c322a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
