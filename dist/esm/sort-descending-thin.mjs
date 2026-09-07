export const name="sort-descending-thin";
export const id="dl_b7fcdbeba641431baff6";
export const url=new URL("../icons/S/sort-descending-thin.svg?v=eaa5ed02a15b5f2ddcf69afc6e2365953ad82d8122bd9370c6ed8be8367c71fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
