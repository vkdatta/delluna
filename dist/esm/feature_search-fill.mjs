export const name="feature_search-fill";
export const id="dl_2e1636b33f637f9b7964";
export const url=new URL("../icons/feature_search-fill.svg?v=46d867ee3ec4da151368e4b0e6bbe0b4824114536522cac059373ebfe0dff219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
