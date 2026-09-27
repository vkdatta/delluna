export const name="folder_code-fill";
export const id="dl_874790dcc588149a786e";
export const url=new URL("../icons/folder_code-fill.svg?v=22595d7d273dd6be8759df0d6ed4fe9d1b7cc91677fce7b2183414efe5214dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
