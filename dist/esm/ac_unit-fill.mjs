export const name="ac_unit-fill";
export const id="dl_36f095bab2e46725ddb9";
export const url=new URL("../icons/ac_unit-fill.svg?v=22c0cc86a1e6ee8b048d87ff8cd14351dfc68e4d7ce7d85bf11023d611c55127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
