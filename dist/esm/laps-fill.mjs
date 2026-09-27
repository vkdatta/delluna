export const name="laps-fill";
export const id="dl_78b9f898c6e0c115c1a5";
export const url=new URL("../icons/laps-fill.svg?v=4f61e0bb3311f34e2fca80112792f9e67b7d4e38ec466524e1116f17d81ded6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
