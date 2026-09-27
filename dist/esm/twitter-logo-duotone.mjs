export const name="twitter-logo-duotone";
export const id="dl_f3b282f6591f65de347f";
export const url=new URL("../icons/twitter-logo-duotone.svg?v=934c1bf8637b73902fee20c6ad770acf9c9a725972e6357739a57fb035e41271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
