export const name="wifi_calling_bar_2-fill";
export const id="dl_5ff87ab3c63d21c384e9";
export const url=new URL("../icons/wifi_calling_bar_2-fill.svg?v=b8ac8694a50a820c6546b623098b90d82182fd0c8f77b1d8451d7466e1e1f5bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
