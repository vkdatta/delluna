export const name="wifi_calling_bar_2-fill";
export const id="dl_7a9621629b62f32b1614";
export const url=new URL("../icons/wifi_calling_bar_2-fill.svg?v=30b1387d0784c9fa4cf6f63b6365162e2346a9f47934306763f51a8242ce2f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
