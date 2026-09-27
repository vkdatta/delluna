export const name="leaderboard-fill";
export const id="dl_dac9fe36bd5fe799bb2b";
export const url=new URL("../icons/leaderboard-fill.svg?v=33cdb848de6e53bcdbbeb2e5960e3c0894658c5001ddca2676483819def2c94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
