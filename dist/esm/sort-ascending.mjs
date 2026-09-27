export const name="sort-ascending";
export const id="dl_ecde598f88def5a6c2f4";
export const url=new URL("../icons/sort-ascending.svg?v=5d5ebca4dd943d5c3ad53b329733ac06cf18e9ac12d6c97ed266acaeea576a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
