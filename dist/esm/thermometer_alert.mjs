export const name="thermometer_alert";
export const id="dl_f8107324d68c4a6ebc0a";
export const url=new URL("../icons/thermometer_alert.svg?v=59351b1be5ed24ee268f5cc2f803491881ef9a36381dfc110a27d689d5fc70de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
