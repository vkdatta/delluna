export const name="search_insights-fill";
export const id="dl_1ba657df7227441d8ec3";
export const url=new URL("../icons/S/search_insights-fill.svg?v=bf4f3e4f541916a9924d638cabf7af1f7bc5f40f55d4a7bbfefe6d4bb72c5c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
