export const name="not_listed_location";
export const id="dl_e2caf0a08ac10739da37";
export const url=new URL("../icons/not_listed_location.svg?v=c201ae156de2cb2dc8d21d0f1ae1a863888d74f7339d2c1ca7c70b8a41f7a8dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
