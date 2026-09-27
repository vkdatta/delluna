export const name="film-reel-fill";
export const id="dl_29eab8c395af43ffbc0f";
export const url=new URL("../icons/film-reel-fill.svg?v=1033a605ebcce16477c6302d6462862c6e56bddfc273a25909ce4279d9cf282f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
