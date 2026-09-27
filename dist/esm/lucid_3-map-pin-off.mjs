export const name="lucid_3-map-pin-off";
export const id="dl_1451ba342b9d4d2e897f";
export const url=new URL("../icons/lucid_3-map-pin-off.svg?v=42debfd1b08925d3621c16f45ae560fce3aeb1219dd9f4d4fe05161c8d50fec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
