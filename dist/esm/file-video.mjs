export const name="file-video";
export const id="dl_c81888ab21a8469cb9c8";
export const url=new URL("../icons/file-video.svg?v=d33e4ae52538c3f83a83b137e18bbe3f4a2a3ed152ba051932a6b7b37beafd3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
