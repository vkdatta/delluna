export const name="folder_managed-fill";
export const id="dl_d42853b85b3b4e04c4ac";
export const url=new URL("../icons/folder_managed-fill.svg?v=b1fdcd68d006cc3b0cb36a3b7ae0295a15e4663d48d9f70094c70212211d206a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
