export const name="lucid_1-clipboard-paste";
export const id="dl_02c5f1b90a3e4561a6ea";
export const url=new URL("../icons/lucid_1-clipboard-paste.svg?v=967c141d0c079c476590255906745ad39a07c34a2e0e54551e87d376921ffddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
