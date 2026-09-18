export const name="spatial_audio-fill";
export const id="dl_a3c54d0f969f4abfa26a";
export const url=new URL("../icons/S/spatial_audio-fill.svg?v=f99a31228db507139df463f077f632eea8da6ce72be5fd3855e62d6a5fe47bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
