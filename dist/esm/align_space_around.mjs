export const name="align_space_around";
export const id="dl_d7c507e5e835d16b23d7";
export const url=new URL("../icons/align_space_around.svg?v=092bf53e7e70d8be36aa50c34f006fb2ec5b47e20f846ffbd714420b3ad42ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
