export const name="social_leaderboard";
export const id="dl_fadedb6ce2f841f4ab5d";
export const url=new URL("../icons/social_leaderboard.svg?v=62a824e81069f52ccb1572c96d21ba4b55ca7f4a46079ba7434b6943725f659c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
