export const name="battery_alert-fill";
export const id="dl_61156ca04cda2beed25d";
export const url=new URL("../icons/battery_alert-fill.svg?v=8362196c379b9fa074601ae3da21d5bc0c993a746388b56bce4ce1e3ead63d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
