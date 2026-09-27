export const name="folder_code";
export const id="dl_01424410c1fd887560fc";
export const url=new URL("../icons/folder_code.svg?v=7b043b47a7bd794c1a261273c10f92a65ee465c4b213e42f5dd19f2c3a16096b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
