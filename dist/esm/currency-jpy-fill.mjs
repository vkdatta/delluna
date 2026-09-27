export const name="currency-jpy-fill";
export const id="dl_030913e2994c43ddb783";
export const url=new URL("../icons/currency-jpy-fill.svg?v=fe632113b50ba4ea13bc4edad7ec88abb3963e5d90f1f9228c453584bb2a24b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
