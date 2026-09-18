export const name="saved_search-fill";
export const id="dl_81eff6af414e4c9dabaa";
export const url=new URL("../icons/S/saved_search-fill.svg?v=39040c919e2ddeef2bb6124a53307f9546da605ad021be2c016350cfbb40d04b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
