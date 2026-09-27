export const name="zoom_in_map-fill";
export const id="dl_7a45312fa2caeaea26e7";
export const url=new URL("../icons/zoom_in_map-fill.svg?v=2d5bc71649bcfa58b05709cf1a6567f6377ba8f690f37fdd4dd7e6186afd3d67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
