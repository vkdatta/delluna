export const name="humidity_mid-fill";
export const id="dl_ceb2cef3175225de9cab";
export const url=new URL("../icons/humidity_mid-fill.svg?v=84039ca4f19e12c11b1c93ee1a2e433097145ea77effac740365513cb319fd77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
