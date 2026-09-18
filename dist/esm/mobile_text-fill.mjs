export const name="mobile_text-fill";
export const id="dl_c4485442e9264ada96a4";
export const url=new URL("../icons/mobile_text-fill.svg?v=121646e28649aa7a6dfaa37e06706940fc891c3c6d2834b765e5026922d6c480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
