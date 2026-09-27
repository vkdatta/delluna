export const name="star-of-david-light";
export const id="dl_4b2ae9e04cb161ef3fb1";
export const url=new URL("../icons/star-of-david-light.svg?v=41842195e7d94fe17d3d43bf1a23df985446e968867ef0d3a1fba411bb5d75ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
