export const name="wine_bar";
export const id="dl_dacc825e8141b6f254fb";
export const url=new URL("../icons/wine_bar.svg?v=2088af5d33fd64f4976fbf86c4525e0310424145aa09aafe48b6fc730a8dae57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
