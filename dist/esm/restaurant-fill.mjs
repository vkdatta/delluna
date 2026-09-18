export const name="restaurant-fill";
export const id="dl_8f8a4ad2a3c24c71af8f";
export const url=new URL("../icons/R/restaurant-fill.svg?v=e2a02c68741cf1799be1abc9d3f0851feaed4f97fb4748b3ae1d856f45735de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
