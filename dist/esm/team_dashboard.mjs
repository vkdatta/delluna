export const name="team_dashboard";
export const id="dl_ea7213d64678f0706981";
export const url=new URL("../icons/team_dashboard.svg?v=997e042938916c6f71be4305a349d7ae68cdc4ec8dfb4604141d79c8daf47b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
