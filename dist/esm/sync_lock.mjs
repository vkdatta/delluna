export const name="sync_lock";
export const id="dl_df93118040399987ef8f";
export const url=new URL("../icons/sync_lock.svg?v=2b20bd7838f3e9ef410760b7edfe9628e182a5fe96c4ab837aa26dcdc2da006d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
