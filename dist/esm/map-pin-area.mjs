export const name="map-pin-area";
export const id="dl_fd786975a4b9460c892f";
export const url=new URL("../icons/map-pin-area.svg?v=cfe60ca8eec16c8b0fe78285444eea4ca474c5ae050d3e05063de1794423d16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
