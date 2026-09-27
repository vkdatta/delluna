export const name="music_video";
export const id="dl_53e2256626711f77271a";
export const url=new URL("../icons/music_video.svg?v=a99ee6e74938506d77277ef040bfaf56bf27fd9611db07f0872fa73c78a6c870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
