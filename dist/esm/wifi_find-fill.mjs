export const name="wifi_find-fill";
export const id="dl_854718ee81fa1a8d6b25";
export const url=new URL("../icons/wifi_find-fill.svg?v=23529dcd159323f36751faf8f9fda83a8140bd423d745eb8f995bfdd10fc12bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
