export const name="hair-dryer-fill";
export const id="dl_944ba1f2f4164af8bca5";
export const url=new URL("../icons/hair-dryer-fill.svg?v=313d0c8f4b1743a1537c359c84227973a5fadf93ec6bb3f8d00d15f42a32004b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
