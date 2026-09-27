export const name="social_leaderboard-fill";
export const id="dl_cbd16675d0609d44b3e0";
export const url=new URL("../icons/social_leaderboard-fill.svg?v=57e50da531f5ddc2aab737dd533b2daa8dee2a8c631f39808e5fb634c1d1499f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
