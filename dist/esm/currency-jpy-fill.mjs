export const name="currency-jpy-fill";
export const id="dl_030913e2994c43ddb783";
export const url=new URL("../icons/currency-jpy-fill.svg?v=7f3639ecb93cdb856a7c95bb280d5264dd0474bed466204fb07451d6b4a0a2af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
