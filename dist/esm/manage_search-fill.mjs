export const name="manage_search-fill";
export const id="dl_54fc2c8ec6799b692b03";
export const url=new URL("../icons/manage_search-fill.svg?v=e1214606bf603c95ef0e53d09d1c518c27d2fca691ee6061742c6825a150a6cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
