export const name="tally-2";
export const id="dl_151768dbfae84f6bb3e1";
export const url=new URL("../icons/tally-2.svg?v=d620604586ede2f3f410ff3462485bd5611b4a02bd55804e7e8df99f6f73d588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
