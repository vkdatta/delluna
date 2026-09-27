export const name="warning-circle";
export const id="dl_eb9b4391711b25bad9f4";
export const url=new URL("../icons/warning-circle.svg?v=e48a90760a68659fd3f06dd9187e471aead4877c72e915339071b2c7f7bd714c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
