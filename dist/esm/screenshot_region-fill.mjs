export const name="screenshot_region-fill";
export const id="dl_141458806941106603bd";
export const url=new URL("../icons/screenshot_region-fill.svg?v=762fe34358a5ebca3e65262c59f8d8c7b6596defc8019155023d6c15f6673e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
