export const name="settings_alert-fill";
export const id="dl_224a9297c7d704dd1ea0";
export const url=new URL("../icons/settings_alert-fill.svg?v=fdd56773443e160876f4b6a8e0d3eebb7ed93b0445762d67b0129dd8e5c91737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
