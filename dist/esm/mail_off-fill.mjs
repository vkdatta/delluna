export const name="mail_off-fill";
export const id="dl_530c1b709f18e8918cbc";
export const url=new URL("../icons/mail_off-fill.svg?v=e05bc5baa882cf16154b9c2e6d596fa72a0217de15856cb7776a57946aded817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
