export const name="screen_search_desktop-fill";
export const id="dl_9eca0b7caa5564d3a33d";
export const url=new URL("../icons/screen_search_desktop-fill.svg?v=acbac328d805eee2d5693e6adc1446244668a61bb036450b56fb16154cd5e8ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
