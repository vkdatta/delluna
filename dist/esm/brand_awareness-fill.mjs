export const name="brand_awareness-fill";
export const id="dl_35c17434217e028faa68";
export const url=new URL("../icons/brand_awareness-fill.svg?v=992913827dd40772c2ab21b480d1f2f6a27e6fd69c1289ca1c5fb04d1ea21b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
