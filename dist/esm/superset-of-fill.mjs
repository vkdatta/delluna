export const name="superset-of-fill";
export const id="dl_db8dae19215f44d18856";
export const url=new URL("../icons/superset-of-fill.svg?v=dd69de43974a2db2cb1fa7e6a1343ec8c4db54f327b473ba1208747eb25c2b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
