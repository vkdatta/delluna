export const name="full_coverage-fill";
export const id="dl_b2a98bb48bea8df99e7b";
export const url=new URL("../icons/full_coverage-fill.svg?v=f29458510c5cbf8149ae016874ec78ba2fbbf37160fae9196f18a1087ae99bde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
