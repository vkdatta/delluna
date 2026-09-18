export const name="shield_person-fill";
export const id="dl_b5ca6532d0364a47856e";
export const url=new URL("../icons/S/shield_person-fill.svg?v=4676f35f8d18bb140c44e75daaa1d4d514de6f366975a3962fd6b97dea77b2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
