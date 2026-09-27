export const name="heart-break-light";
export const id="dl_0dde3bf0ff6041658f57";
export const url=new URL("../icons/heart-break-light.svg?v=670c4e06f48d9f020693de5fdda5866927b23c1f5ee33a5857bf0b6a08c6c981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
