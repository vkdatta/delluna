export const name="dialer_sip-fill";
export const id="dl_bc6ea8966e8c8963bd93";
export const url=new URL("../icons/dialer_sip-fill.svg?v=8c697602c31debebf01a7ac4b73597fd04536f5e4a80aaff119dedcd8c7df776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
