export const name="breaking_news-fill";
export const id="dl_11c6671587caf9f41e56";
export const url=new URL("../icons/breaking_news-fill.svg?v=ce66672377e6b2bc5d4012e4dd2c2142391aeea3a442b56312ee0de58e3196ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
