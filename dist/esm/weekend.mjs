export const name="weekend";
export const id="dl_8510b491259a6cc53e5a";
export const url=new URL("../icons/weekend.svg?v=117beb29524fe1bd779d47a8b64f47896e1eb772a63f89497ef3f0730a758859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
