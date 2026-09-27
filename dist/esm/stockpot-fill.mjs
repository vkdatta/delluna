export const name="stockpot-fill";
export const id="dl_643b31d711b913cd5053";
export const url=new URL("../icons/stockpot-fill.svg?v=c3ac638c10684bd564a88a53e3216de56fa9980746c89568b78355f80554ffa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
