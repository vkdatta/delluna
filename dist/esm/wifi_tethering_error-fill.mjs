export const name="wifi_tethering_error-fill";
export const id="dl_2fd792886219102d6b22";
export const url=new URL("../icons/wifi_tethering_error-fill.svg?v=32ec92dcedfe66f866befa3894178e312ddac2fe72906f2cfa126504cc18fe43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
