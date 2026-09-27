export const name="align-top-bold";
export const id="dl_739afd4c1bc647b7a82d";
export const url=new URL("../icons/align-top-bold.svg?v=ebd1570d1ddf5011d36a123916ba2d6e1669f309982b0e6cf9c5be1f527158fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
