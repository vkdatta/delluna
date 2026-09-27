export const name="download_for_offline-fill";
export const id="dl_42419badce13473abfd4";
export const url=new URL("../icons/download_for_offline-fill.svg?v=a19663d0a2da2e5c4e50f972ebe07e2ce43a33587c4a627d62e49d2ddcb07598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
