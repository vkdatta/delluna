export const name="add_home_work-fill";
export const id="dl_dfd30118abf9131b158f";
export const url=new URL("../icons/add_home_work-fill.svg?v=5703d1b1312cecbd0ff4ade964e7335dd4f1a84410ccfad2a17915be2dcc42dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
