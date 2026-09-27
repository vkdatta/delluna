export const name="universal_currency-fill";
export const id="dl_6e11fee7e9b8c39930ae";
export const url=new URL("../icons/universal_currency-fill.svg?v=4d3bb4c0642973fc318b5a65b1e7f5db3b367d44360b891f6cd2bd122faae102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
