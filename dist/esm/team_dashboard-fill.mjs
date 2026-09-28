export const name="team_dashboard-fill";
export const id="dl_4c9cf9bdf7f56f00c95f";
export const url=new URL("../icons/team_dashboard-fill.svg?v=aecf6ad4bfde4ae0e6b1ed0e3ebfc63d00bca727f6849518ac59989fd83e29a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
