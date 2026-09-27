export const name="wifi_calling";
export const id="dl_e5da744e467d5c4f24c0";
export const url=new URL("../icons/wifi_calling.svg?v=e66f55a1cde08ad798f253b603a8e46e1a8c45d2b6e9d6bd58aa5303d2678f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
