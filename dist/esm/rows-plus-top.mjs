export const name="rows-plus-top";
export const id="dl_e504bac3e26a486bb036";
export const url=new URL("../icons/rows-plus-top.svg?v=473669a3eb6973cc897650df729c004ef635787f98ea7de1ba398a1a052fecde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
