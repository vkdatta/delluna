export const name="map-pin-area";
export const id="dl_fd786975a4b9460c892f";
export const url=new URL("../icons/map-pin-area.svg?v=e56619b19b5db1dadb206abe4ec732f38423bd685b679727b6f1c3d7cd73efac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
