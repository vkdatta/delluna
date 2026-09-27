export const name="mobile_wrench-fill";
export const id="dl_285af3688d8a81a5f521";
export const url=new URL("../icons/mobile_wrench-fill.svg?v=e1357571fbb41a1047db15667b00013014ec7843d84eba4a57e3f13e7762f482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
