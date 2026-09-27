export const name="tidal-logo-light";
export const id="dl_c0881adc0057fd84e0bd";
export const url=new URL("../icons/tidal-logo-light.svg?v=a57da2f1e51276713935c5ae22a62ac5eb47283c6b97360140c4613b46f5542a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
