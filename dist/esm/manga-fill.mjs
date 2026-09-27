export const name="manga-fill";
export const id="dl_2b9f9ef65f6b623163c1";
export const url=new URL("../icons/manga-fill.svg?v=38c0d8b12272eb52c454f921ea8492ecf7995876273528b4d3b9ad0d453fb014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
