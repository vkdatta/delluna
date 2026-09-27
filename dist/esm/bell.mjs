export const name="bell";
export const id="dl_31726b71b03d4c939fa4";
export const url=new URL("../icons/bell.svg?v=6cbc30faef583a52c6d96299896d28a1ce141f156c1578a520c855fc6653e96b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
