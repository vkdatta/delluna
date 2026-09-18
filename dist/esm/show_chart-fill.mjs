export const name="show_chart-fill";
export const id="dl_739bbc919b3140e787cc";
export const url=new URL("../icons/S/show_chart-fill.svg?v=a95de69303ba9c2f9e5e4f6474ba560cbc7ff1871ea8b3cf74ce3df52825b8cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
