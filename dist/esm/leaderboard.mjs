export const name="leaderboard";
export const id="dl_b911710e15ce4a4388c5";
export const url=new URL("../icons/L/leaderboard.svg?v=d4ea35e8fa1428e36d53785cd9b21f8882137ae9a5ef67a6575f4a1a5c6c5f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
