export const name="feature_search";
export const id="dl_a60f0a86f71ac8c05117";
export const url=new URL("../icons/feature_search.svg?v=19e99372dfec49c9a6ace29fd058f5a401035adffafc91b760e13b8bdaa1b139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
