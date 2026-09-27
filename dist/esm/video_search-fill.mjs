export const name="video_search-fill";
export const id="dl_265d7526fa2cc48beb59";
export const url=new URL("../icons/video_search-fill.svg?v=7600d432e996e97f0c2d33a36065f022f9bb626cf9e59d32f03f4b6ae3a45bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
