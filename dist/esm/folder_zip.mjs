export const name="folder_zip";
export const id="dl_2e0b1549220c66a6f06a";
export const url=new URL("../icons/folder_zip.svg?v=2e767a314df2dbf579b5573512e2313cfbb038e012cc875c58cc3a5c1c4d4701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
