export const name="spatial_audio-fill";
export const id="dl_c35b1d1a4bf4150a7b03";
export const url=new URL("../icons/spatial_audio-fill.svg?v=100fc15efc9806ab29cf9a6f588130bc404580c8fafa8b2743098124b8c7849f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
