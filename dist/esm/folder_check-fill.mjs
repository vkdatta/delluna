export const name="folder_check-fill";
export const id="dl_4f5b28f13f41312d8e88";
export const url=new URL("../icons/folder_check-fill.svg?v=66c30fdf161a159b7564f2e304d3919d47dfea9a6e22d93fdb535c2b9284e8b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
