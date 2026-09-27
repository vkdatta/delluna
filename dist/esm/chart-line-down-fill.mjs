export const name="chart-line-down-fill";
export const id="dl_2afe4490ee6f4a99aa4b";
export const url=new URL("../icons/chart-line-down-fill.svg?v=8808c2f7a55ef27ad02f9a848916cdc8d1af698d90832c37afab98aeb016f451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
