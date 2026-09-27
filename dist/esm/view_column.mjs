export const name="view_column";
export const id="dl_cd174ea7488e13aeed17";
export const url=new URL("../icons/view_column.svg?v=85b8aa8ffb47958ee73341e0157b8f0cb966305315909c2c512f6d6e3e4867a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
