export const name="folder_open-fill";
export const id="dl_47dbf683227f4c8d9c61";
export const url=new URL("../icons/folder_open-fill.svg?v=af43a357ae28fac189ef6478d9bf68a584b94d7278b0bd0291b66a6b6465b764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
