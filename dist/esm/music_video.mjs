export const name="music_video";
export const id="dl_38cf5acc7d2d4f93af19";
export const url=new URL("../icons/M/music_video.svg?v=ba781078345c2b5e9354aa0da09171328b149f0a6233f0c1ee40bc3b4874e80e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
