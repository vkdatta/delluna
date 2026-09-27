export const name="deceased";
export const id="dl_c230616fb107d9b9da3c";
export const url=new URL("../icons/deceased.svg?v=67870bde048fe0e6261efd1893d94c8f9a1694c67f8ef68828128fb61f10df7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
