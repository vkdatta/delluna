export const name="wifi_calling_bar_3";
export const id="dl_895c67db80250e177830";
export const url=new URL("../icons/wifi_calling_bar_3.svg?v=f5b3341fd9d2e28caee18cf087f0cefc4bc455ce72415b2d6c3e8cfa6540cac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
