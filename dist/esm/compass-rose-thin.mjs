export const name="compass-rose-thin";
export const id="dl_b25d727c7b5b4011bd91";
export const url=new URL("../icons/compass-rose-thin.svg?v=8996bd47189646fe0a286c9fb5a57272bcc84ad3aca7516470c6c8924b7a099a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
