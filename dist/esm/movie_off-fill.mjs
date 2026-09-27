export const name="movie_off-fill";
export const id="dl_53406989a8399408286d";
export const url=new URL("../icons/movie_off-fill.svg?v=1c1688aa2519018b1e89602780f600ff8685f496ab87dd9d032a4e7f0220b90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
