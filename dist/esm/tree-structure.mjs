export const name="tree-structure";
export const id="dl_e81365e6a41a2ac6064c";
export const url=new URL("../icons/tree-structure.svg?v=b44cc8e3cfb16309ee80aa43bb581427d57796a702ddace498ba41ff0709c461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
