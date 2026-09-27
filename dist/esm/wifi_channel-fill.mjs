export const name="wifi_channel-fill";
export const id="dl_5ad808dab353206f279b";
export const url=new URL("../icons/wifi_channel-fill.svg?v=691e0d40c6a5f301e0eafc880b43e32795f7b1bda1e8794268ba328359b1f802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
