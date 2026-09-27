export const name="leaderboard";
export const id="dl_7b4bb1c03f74f8e278be";
export const url=new URL("../icons/leaderboard.svg?v=39f31eadf858558b48a809d11d8575223d4ebbe9a89b3e960b91fd854267b868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
