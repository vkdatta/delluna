export const name="in_home_mode";
export const id="dl_07297fd8f567914a4498";
export const url=new URL("../icons/in_home_mode.svg?v=7476c21cbdf0e3652dabbdf9aedf590d59d1fdb2a15eba3affceafccc46fcf55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
