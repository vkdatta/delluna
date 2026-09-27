export const name="router_off-fill";
export const id="dl_c732fcbae0a5603fc783";
export const url=new URL("../icons/router_off-fill.svg?v=ee26ffedd893163935301e8b54c210b1983a9a17e46bf332897aea5529e2e863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
