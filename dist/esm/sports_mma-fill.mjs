export const name="sports_mma-fill";
export const id="dl_094b8a59e30ab1d0745a";
export const url=new URL("../icons/sports_mma-fill.svg?v=590797229ce64ab0d46e23917b6faf7e3c3723031c232d855013895939cd7e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
