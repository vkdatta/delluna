export const name="team_dashboard-fill";
export const id="dl_f3c0455dc38546c8a66a";
export const url=new URL("../icons/team_dashboard-fill.svg?v=e3598886b9034ce6d320295ef840c2a6b39ae5848efab5b986734b76ea178a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
