export const name="arrows-merge-light";
export const id="dl_b60f4ffe56b4423fa185";
export const url=new URL("../icons/arrows-merge-light.svg?v=94fe013016472ed7b4574077ab9c14c995bcdd2be1bf7b8db0823fbd51a6471a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
