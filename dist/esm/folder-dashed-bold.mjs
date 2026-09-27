export const name="folder-dashed-bold";
export const id="dl_33942625d64d4fefba2f";
export const url=new URL("../icons/folder-dashed-bold.svg?v=9581cda11ea75d537ed8f9637673b4796412e5c7ac06c11af5f931cc0f615b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
