export const name="television";
export const id="dl_29de053f505fba792d36";
export const url=new URL("../icons/television.svg?v=9cc87d796c83d47d868a6d6e8a5689f0645fdc538606e744eb6fa2099c9e0a57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
