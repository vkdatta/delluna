export const name="stop_circle-fill";
export const id="dl_fb32f938865b4b1faa23";
export const url=new URL("../icons/S/stop_circle-fill.svg?v=9478d13e59a2426c40612e5f98640e52e509b30cde0a1be366c51b1105d37e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
