export const name="device-rotate";
export const id="dl_6c8b5a0ef6e54aa7a548";
export const url=new URL("../icons/device-rotate.svg?v=c9459e6d50c09295cfe69dde565a858f287062d8b5bdad70b643a151caaaba75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
