export const name="add_location_alt-fill";
export const id="dl_c6e3d46d494043e8a38f";
export const url=new URL("../icons/A/add_location_alt-fill.svg?v=8ac8d0b005398898210d8dcd1823d7c3bf62dcc4285830b7284d11300499694c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
