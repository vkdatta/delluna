export const name="team_dashboard-fill";
export const id="dl_dd727bbeb0139bdecff0";
export const url=new URL("../icons/team_dashboard-fill.svg?v=f911efc9c8286393ac53826455967c6a68f295a7ab127b65da5f28d56ccbf208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
