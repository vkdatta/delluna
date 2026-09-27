export const name="charging-station-thin";
export const id="dl_ac1164780cbe40d79902";
export const url=new URL("../icons/charging-station-thin.svg?v=4228fa17fdfae29007dccbc67a1722e634a0d0295d0ebdccc15a5e6ee8d05b00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
