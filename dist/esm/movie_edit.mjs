export const name="movie_edit";
export const id="dl_7d7e2a38451d410882fb";
export const url=new URL("../icons/M/movie_edit.svg?v=6b7c3533c1f301373880f372ee11da075f22682ea77e72ff1b52a317f426d24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
