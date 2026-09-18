export const name="wifi_calling_bar_3-fill";
export const id="dl_bccf1002af1f424cba75";
export const url=new URL("../icons/wifi_calling_bar_3-fill.svg?v=431df94a2ae7c9ec18218cd8697062049ccbd5e36f4f4a018cf1a371b3e85524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
