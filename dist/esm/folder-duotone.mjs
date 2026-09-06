export const name="folder-duotone";
export const id="dl_e8c20b74a6aa41158d05";
export const url=new URL("../icons/folder-duotone.svg?v=13b80de6bee262ba8d1e1230d9926b1f3df1e25b91430a4d9c2c36e8a456c820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
