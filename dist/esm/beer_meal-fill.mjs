export const name="beer_meal-fill";
export const id="dl_0ee8740d709b7f304d73";
export const url=new URL("../icons/beer_meal-fill.svg?v=15661f2e48f89551e618a8431b5ded804586f094d6e1338e8983df485d55b1ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
