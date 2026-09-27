export const name="seal-warning-fill";
export const id="dl_05a657d9830ee7c012fe";
export const url=new URL("../icons/seal-warning-fill.svg?v=af5d0277159083d92c6557353261669e397fb6e91f32701de069362c678b7087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
