export const name="social_leaderboard-fill";
export const id="dl_54247daafe099e9c3576";
export const url=new URL("../icons/social_leaderboard-fill.svg?v=13ec2503c536f07527c4ea75f633e283218e424dbe41d2eeb79aaedf8cb22e95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
