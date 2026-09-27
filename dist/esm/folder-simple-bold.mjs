export const name="folder-simple-bold";
export const id="dl_7ed267c32d83496d8c01";
export const url=new URL("../icons/folder-simple-bold.svg?v=215c9d331753495851ef36e55dc5a4311ac61f36a33ed452e835f31cad00b9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
