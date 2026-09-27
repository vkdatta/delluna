export const name="social_leaderboard";
export const id="dl_aaee19053012b4e69aa5";
export const url=new URL("../icons/social_leaderboard.svg?v=76f871c7655cb7648d6837231a58dbd919ab9ce4c2b5c70cad48dcf7193e2b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
