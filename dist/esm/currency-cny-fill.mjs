export const name="currency-cny-fill";
export const id="dl_4486bc6aa5ab4a068afe";
export const url=new URL("../icons/currency-cny-fill.svg?v=6242517244127235410d089048231aab6178d96e5d08bb93996d0eec613c96ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
