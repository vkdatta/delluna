export const name="battery-full-thin";
export const id="dl_e3b9949cf60044c18b5f";
export const url=new URL("../icons/battery-full-thin.svg?v=0bd1e41e7dd7581cba014a57b118946ec20d54036eba9158776eeb320f0a75f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
