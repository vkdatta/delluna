export const name="music-notes-thin";
export const id="dl_685843455522443486ea";
export const url=new URL("../icons/music-notes-thin.svg?v=12957617d2881cf0c4c4a13308ddbdc084e653b7fc598f175c43d92cea420447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
