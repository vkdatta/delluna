export const name="belt";
export const id="dl_0f7fd75af0c140bd87ca";
export const url=new URL("../icons/belt.svg?v=0173201bb901605698f296c6764a946c2da9f3a85e960c482bcc1982362e7565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
