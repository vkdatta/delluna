export const name="team_dashboard";
export const id="dl_923b2b895caf4a15b216";
export const url=new URL("../icons/team_dashboard.svg?v=f670529d4ca93da32d29b8319ef4cb35795c9a3f6caa1c10af3c99171d81e3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
