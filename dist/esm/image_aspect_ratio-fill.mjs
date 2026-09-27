export const name="image_aspect_ratio-fill";
export const id="dl_4b63c2ed72a6b5cb58fa";
export const url=new URL("../icons/image_aspect_ratio-fill.svg?v=993fdbc113ba84d4aeb05702453f5604aa285d6957874f5e428cd4c8d04cd4cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
