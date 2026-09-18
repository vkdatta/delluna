export const name="social_leaderboard-fill";
export const id="dl_6d3fe8ad1e084d158cc5";
export const url=new URL("../icons/social_leaderboard-fill.svg?v=6cce1a6fb00137e5247f8de06838f2968afc12f9fc2826c2224416dd7ae113e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
