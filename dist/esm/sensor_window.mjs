export const name="sensor_window";
export const id="dl_55fe2d6ee67b4023a160";
export const url=new URL("../icons/sensor_window.svg?v=431c59ddbfa3887d32f2abdf1cdcecb424c96cc1d9653f20c782350fa82e354b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
