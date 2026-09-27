export const name="thumbs-down-fill";
export const id="dl_315c0fbf964540fe3737";
export const url=new URL("../icons/thumbs-down-fill.svg?v=fddc1a46b253542644eb0ac296b2d787b80d5b9ba511e344410752838fd690a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
