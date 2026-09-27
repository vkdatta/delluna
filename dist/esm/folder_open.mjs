export const name="folder_open";
export const id="dl_d87681d7a165c2fb0176";
export const url=new URL("../icons/folder_open.svg?v=6ad1f506965b2c9638eb05a5ad9836f5e1a6c542919e507a227b4c618eb68099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
