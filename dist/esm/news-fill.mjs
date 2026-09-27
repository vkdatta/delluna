export const name="news-fill";
export const id="dl_b3dd0a6461b87ab8b9d5";
export const url=new URL("../icons/news-fill.svg?v=cd01f8d8a794210546f484e756bd35a993c00753a71ce94026524c4d2760aa04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
