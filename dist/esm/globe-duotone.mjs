export const name="globe-duotone";
export const id="dl_ad655480699e4245879c";
export const url=new URL("../icons/globe-duotone.svg?v=b9fd5ea9c984f786b47ac59f3aa913e3748d40f45f8eb212874718adc38e02b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
