export const name="folder_zip-fill";
export const id="dl_b6c56240d5bcfaf3e90e";
export const url=new URL("../icons/folder_zip-fill.svg?v=e8bb1be0e3009b52f577c6765f0e532a2aa6e70f276629ccab1556cbe760e3c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
