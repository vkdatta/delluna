export const name="air_purifier";
export const id="dl_df1aba2b2f62e987d743";
export const url=new URL("../icons/air_purifier.svg?v=d3844cd5e10385c9d7099c70ac7d976d0c6d97a223ad8dcef9498ebea0efa0a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
