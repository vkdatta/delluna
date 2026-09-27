export const name="team_dashboard-fill";
export const id="dl_a1e28113e5a8ff10eced";
export const url=new URL("../icons/team_dashboard-fill.svg?v=9f97781bb7dadea719bea0c184b40b3fe70ae7dcd71fc551f4902832dcd41298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
