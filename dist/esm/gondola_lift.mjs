export const name="gondola_lift";
export const id="dl_dbf846d3051d759caeac";
export const url=new URL("../icons/gondola_lift.svg?v=e88d22623c1ef1aa75e09e0756702a4a53eb14e4880185b21532cbf1b43ea1c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
