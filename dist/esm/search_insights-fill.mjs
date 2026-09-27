export const name="search_insights-fill";
export const id="dl_bd4e6fdc01d464dcaf24";
export const url=new URL("../icons/search_insights-fill.svg?v=d687fd970faa9827cb9be2c81d09ea9a55a18eb5f067ea02e97efa3b215cdb66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
