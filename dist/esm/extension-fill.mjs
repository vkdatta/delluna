export const name="extension-fill";
export const id="dl_3a37cad3262d1227b034";
export const url=new URL("../icons/extension-fill.svg?v=7a3991014523964233a1be0e43d1d8f72ffdccb27b5f00090c19b30387628856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
