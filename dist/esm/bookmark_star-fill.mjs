export const name="bookmark_star-fill";
export const id="dl_8b236fda27c47c690468";
export const url=new URL("../icons/bookmark_star-fill.svg?v=f1b228de035a8302cd119f11615f8248e016927da9e5f15e2ed8375e2c7d7512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
