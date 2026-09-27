export const name="person_edit-fill";
export const id="dl_0a67bba81a9286cb3945";
export const url=new URL("../icons/person_edit-fill.svg?v=f70bda12f5b26fa8c7e06c4ade33997198c3a0c4db9d840b490a3a5596eff973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
