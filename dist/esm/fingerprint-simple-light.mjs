export const name="fingerprint-simple-light";
export const id="dl_c533d8d9fa6c47dab7fe";
export const url=new URL("../icons/fingerprint-simple-light.svg?v=9ca8e9d8a85cdb4ceb5fbbad8f78318897c6b06eb556354283b54065ea7df6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
