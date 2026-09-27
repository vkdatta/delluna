export const name="court-basketball-fill";
export const id="dl_b47d4c5bb7bc4206a30f";
export const url=new URL("../icons/court-basketball-fill.svg?v=500faaed39ee5b8b1d0331df22beba2d6aa1956c051b694e798d0a31fdf6c4ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
