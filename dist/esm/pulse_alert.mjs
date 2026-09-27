export const name="pulse_alert";
export const id="dl_b2c3408de75a6f74d891";
export const url=new URL("../icons/pulse_alert.svg?v=f44c67567cf2ccc36e5eb43e395163dc24a0e65645ab9539cfb4b64ff592eaa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
