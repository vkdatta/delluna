export const name="waypoints";
export const id="dl_eea846d488f3468f9765";
export const url=new URL("../icons/waypoints.svg?v=b0ee5c3deab6b0dec67771f7f648d7560398ed216e7f087b8b1ca049fa367c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
