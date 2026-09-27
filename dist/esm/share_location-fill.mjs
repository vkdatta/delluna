export const name="share_location-fill";
export const id="dl_225ed890d265d3d5e2e5";
export const url=new URL("../icons/share_location-fill.svg?v=00c8a6c7ee89afa20edc5dbaedf585540ad160efd4b37d4744174a3ae89565c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
