export const name="text_compare-fill";
export const id="dl_f6e4bf1359ff2c61015e";
export const url=new URL("../icons/text_compare-fill.svg?v=e10b1e6e064cf10f7ee58e388c65fb76d89b7fd3b23f1f3a02b63d1cb9f8b502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
