export const name="conditions-fill";
export const id="dl_c6376ead68acc23124de";
export const url=new URL("../icons/conditions-fill.svg?v=a8cfc3b8f1ea4d0da4736f2c04318a7840556be25be3db32d76478968c0f3a64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
