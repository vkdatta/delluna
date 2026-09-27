export const name="doorbell_chime";
export const id="dl_8d20e3a57917d8b43943";
export const url=new URL("../icons/doorbell_chime.svg?v=6830233e3915b002439a376dafc78a8000a95d42efbcb194d021b1160508a539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
