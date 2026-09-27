export const name="video_search-fill";
export const id="dl_5f690a8c16ef496883f8";
export const url=new URL("../icons/video_search-fill.svg?v=6b96eb3e58b3789e95059b7b28e7375d5b479ced3e57f0dff85c969ffd49e0f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
