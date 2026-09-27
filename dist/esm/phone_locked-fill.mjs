export const name="phone_locked-fill";
export const id="dl_a964963335db2eb99983";
export const url=new URL("../icons/phone_locked-fill.svg?v=36cc54b1cbe8fc70ae8c3bad5cfd25c85884e6870f79d85a94b859bb79b2e85f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
