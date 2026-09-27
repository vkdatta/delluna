export const name="social_leaderboard";
export const id="dl_9d32acbc02f7ec09d651";
export const url=new URL("../icons/social_leaderboard.svg?v=75e2e81bfee1468ab48d7d9d908563fa99145d042cef4e899854a6ae557c2f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
