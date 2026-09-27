export const name="art_track";
export const id="dl_3c3854967bfc45723023";
export const url=new URL("../icons/art_track.svg?v=bb6507f5ad628cdda2a2e99a595a0f058bb975234aafe68f74ef0370e0ecacf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
