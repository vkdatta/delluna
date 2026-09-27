export const name="restaurant-fill";
export const id="dl_ba98d4336357e079667c";
export const url=new URL("../icons/restaurant-fill.svg?v=873ddd09de18453b511f2a7407c20e5f952749e6177d2b4c0c63223a9944c66d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
