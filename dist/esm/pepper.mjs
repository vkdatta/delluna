export const name="pepper";
export const id="dl_1e79300e29474e29ae15";
export const url=new URL("../icons/pepper.svg?v=67b7e3671dfb6e853e51a5bd8f76cf5790ba3425e95b7d2e26ee54993ab05d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
