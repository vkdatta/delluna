export const name="music-notes-plus-thin";
export const id="dl_15119490ebde4a93a1ba";
export const url=new URL("../icons/music-notes-plus-thin.svg?v=6358193fc9550405314d2748736e6f7a95be856ad2b755e3f5e518c2416d2ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
