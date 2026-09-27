export const name="edit_document-fill";
export const id="dl_d2fe6b88203740d01b8d";
export const url=new URL("../icons/edit_document-fill.svg?v=9ae6221748edd18615c7c5bade5e9f84af78dec860ad576039fd359529d54e89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
