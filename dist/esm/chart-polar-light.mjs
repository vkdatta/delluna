export const name="chart-polar-light";
export const id="dl_af661b5becf74245a6c0";
export const url=new URL("../icons/chart-polar-light.svg?v=1c24f4ca20715dc8775ebbddb2d06751c8aeccb21abb251fa5f68e937e6fe289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
