export const name="person_edit-fill";
export const id="dl_eba05e231f43acab429e";
export const url=new URL("../icons/person_edit-fill.svg?v=784eb732f96d33b71177855a27052b59a085b4f7b4216ead2c7d9b89b5705f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
