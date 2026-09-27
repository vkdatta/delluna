export const name="open_in_new_off-fill";
export const id="dl_933454f4c68573d5052e";
export const url=new URL("../icons/open_in_new_off-fill.svg?v=262826d51329ef6e5698f7dda014b79eaa71ccb2049a771b55465474f578eedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
