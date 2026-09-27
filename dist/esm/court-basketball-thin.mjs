export const name="court-basketball-thin";
export const id="dl_a1b40658424745e1a389";
export const url=new URL("../icons/court-basketball-thin.svg?v=b2a02b8c02abb9d236368cc4b1f5fa0308c2c21105baadaeae8442efec960b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
