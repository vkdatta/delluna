export const name="edit_location_alt-fill";
export const id="dl_b4e68e64a9d6a8ec487d";
export const url=new URL("../icons/edit_location_alt-fill.svg?v=38f7f5dbb7a3d156dab0f10c3b952f4d3cc4fc4fc37999687665411088fefc8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
