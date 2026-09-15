export const name="border_inner-fill";
export const id="dl_d5663733ddb54df0a693";
export const url=new URL("../icons/B/border_inner-fill.svg?v=3806f9b1ead7fe5819e53f8adfda96facad9f1914cf862f36fbacf6a42532b96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
