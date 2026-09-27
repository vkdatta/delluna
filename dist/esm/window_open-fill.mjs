export const name="window_open-fill";
export const id="dl_e24a19f979dc773bded4";
export const url=new URL("../icons/window_open-fill.svg?v=66b6cb9999b8edd48ba679aad8b3a1d9f8724b91d25c2a57a9531fa2812764f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
