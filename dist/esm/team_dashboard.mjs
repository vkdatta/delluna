export const name="team_dashboard";
export const id="dl_34d337383ecc4899a873";
export const url=new URL("../icons/team_dashboard.svg?v=0701015efe47fced72818997f6f92d5fed9c294e4d146de401e27999a24686ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
