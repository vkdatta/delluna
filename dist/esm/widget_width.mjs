export const name="widget_width";
export const id="dl_a499a72c415de87a0c6e";
export const url=new URL("../icons/widget_width.svg?v=eb69a63bacd5d7ed2b6e625a30bda60ae78d8262d43afc70b7d8d62880461059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
