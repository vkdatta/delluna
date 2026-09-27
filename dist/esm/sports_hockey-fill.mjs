export const name="sports_hockey-fill";
export const id="dl_f75d089d6ddf900d1355";
export const url=new URL("../icons/sports_hockey-fill.svg?v=8327b2e153176635475e3859aac7883524a081aee37c4f8aa5b0a17bab3cdf1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
