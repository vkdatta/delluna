export const name="blood_pressure-fill";
export const id="dl_4d3c51ba75ea4e7185fe";
export const url=new URL("../icons/B/blood_pressure-fill.svg?v=4641394559d3410403572802b701ef465e5acb6481f5825c14a3c336c06469d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
