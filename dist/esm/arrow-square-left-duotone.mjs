export const name="arrow-square-left-duotone";
export const id="dl_c96aeb52a4be49519b57";
export const url=new URL("../icons/arrow-square-left-duotone.svg?v=055c377b01755d7e9d2034e8a9ca5f54666df00e4159cfed41719e284f895f9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
