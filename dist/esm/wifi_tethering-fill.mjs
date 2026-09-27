export const name="wifi_tethering-fill";
export const id="dl_7d869c0da4eafb2b3c2b";
export const url=new URL("../icons/wifi_tethering-fill.svg?v=87297c59126e9837bcb6ab9b4c8aca92c888da2f720aa9c5bd1c7d2f776e4217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
