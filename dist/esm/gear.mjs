export const name="gear";
export const id="dl_2a0043b2536d44d9af1d";
export const url=new URL("../icons/gear.svg?v=58247a8384998e69f354f56d69fe4b6b949fedd5dea31759b449eb2f2dd3075e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
