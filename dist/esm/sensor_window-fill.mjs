export const name="sensor_window-fill";
export const id="dl_8abc7176bb58e79dcdc6";
export const url=new URL("../icons/sensor_window-fill.svg?v=1a22cebbfb3b712019042b09203c8a8e47d127bf7b2e737fb128f3f6aefaf811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
