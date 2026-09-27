export const name="map-pin-area";
export const id="dl_fd786975a4b9460c892f";
export const url=new URL("../icons/map-pin-area.svg?v=e2c80da34df7ef52726ba51d526f815c8bc62a9cf8e5d3bb296a3c56f7f65f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
