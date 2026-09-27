export const name="lucid_3-save";
export const id="dl_5dc324380cf24942bd7f";
export const url=new URL("../icons/lucid_3-save.svg?v=4995a6961d3645db6f2e5085ed1b641489990580c59d00c64c0048cd2bd70b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
