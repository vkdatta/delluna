export const name="expand-fill";
export const id="dl_759368a0964109656033";
export const url=new URL("../icons/expand-fill.svg?v=28d1d3ed94403ede8ced54d480403ab9afe3b7bc03892be9771747cdc0139b8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
