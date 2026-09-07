export const name="tidal-logo-light";
export const id="dl_bc1ff6bfa2664d08a7f3";
export const url=new URL("../icons/T/tidal-logo-light.svg?v=a57da2f1e51276713935c5ae22a62ac5eb47283c6b97360140c4613b46f5542a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
