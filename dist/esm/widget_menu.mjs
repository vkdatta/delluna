export const name="widget_menu";
export const id="dl_81f0319c78b14edfcf71";
export const url=new URL("../icons/widget_menu.svg?v=5edb901c939cc8b84c3360d8d3c8bd48ff98d33f008ad7eb031f94a299d81814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
