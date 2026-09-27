export const name="maps_ugc-fill";
export const id="dl_825d3218fd1c6cd55e00";
export const url=new URL("../icons/maps_ugc-fill.svg?v=2b78cc923b794bb0b2dd39d61356c10aa5b6b8160871882073b253a009cbce95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
