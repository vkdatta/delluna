export const name="star_shine-fill";
export const id="dl_9f34e8da6fc16151ae79";
export const url=new URL("../icons/star_shine-fill.svg?v=f67c5af917db478c4ac21867c29a924be322b3a68fa654b108a740c63f8d1e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
