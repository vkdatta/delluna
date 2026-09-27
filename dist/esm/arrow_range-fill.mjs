export const name="arrow_range-fill";
export const id="dl_04ad38d73ae6c5923d3e";
export const url=new URL("../icons/arrow_range-fill.svg?v=53651e6afd79ed71a764508357bdda0990cdf7cb90d5dd5917dbf02b44aa5da0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
