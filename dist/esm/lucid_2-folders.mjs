export const name="lucid_2-folders";
export const id="dl_0dfe9fac3c3f42218007";
export const url=new URL("../icons/lucid_2-folders.svg?v=1d1c10a7a3698e8465dbc760474957a90895e995d7357b4d78705514318afb21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
