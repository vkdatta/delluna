export const name="folder_data-fill";
export const id="dl_98734a819e2f4655969e";
export const url=new URL("../icons/F/folder_data-fill.svg?v=5fbe408566a33ecf7c208addbcfc7b83a656f89dc8ae8464f05d7c2114160e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
