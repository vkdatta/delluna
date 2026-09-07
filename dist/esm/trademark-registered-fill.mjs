export const name="trademark-registered-fill";
export const id="dl_2e36e9abd34847eaae5e";
export const url=new URL("../icons/T/trademark-registered-fill.svg?v=3e35baf0638f4d0b53f662c089134fe5d964ed05b810e6e243af2fe04e1223f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
