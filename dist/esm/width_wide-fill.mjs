export const name="width_wide-fill";
export const id="dl_7937d50856bdb57b9a2d";
export const url=new URL("../icons/width_wide-fill.svg?v=db2b8c01f4f108cddb45623bcff996034cec05b2ce9499a791843e902cb1b768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
