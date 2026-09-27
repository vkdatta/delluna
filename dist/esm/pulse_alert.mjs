export const name="pulse_alert";
export const id="dl_e8d59c90be1a3fb7fe61";
export const url=new URL("../icons/pulse_alert.svg?v=24a8f800b8f61e51b85b9310d5456eee0b6cea78dcfb41174edfdb8341bb759e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
