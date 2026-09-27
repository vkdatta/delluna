export const name="decimal_increase-fill";
export const id="dl_7bbad46d79cec1ee8d27";
export const url=new URL("../icons/decimal_increase-fill.svg?v=dede005a49ea70009d752394ce2220073ce16247e7515f89c55443445ffff8ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
