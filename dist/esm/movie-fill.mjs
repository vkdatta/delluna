export const name="movie-fill";
export const id="dl_729ed26f16bcc9fe6962";
export const url=new URL("../icons/movie-fill.svg?v=63a59aacd1d903da6ce21daa9bb93ccf38e2508080d840cbd1bdb390b45094a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
