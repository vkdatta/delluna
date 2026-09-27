export const name="leaderboard-fill";
export const id="dl_28819c5933cd3421770d";
export const url=new URL("../icons/leaderboard-fill.svg?v=1ce4af96cbf1cb21c66c0421503617efb4b32ba9a0b00c48d9bba6bd745f6713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
