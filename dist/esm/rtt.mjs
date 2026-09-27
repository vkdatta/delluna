export const name="rtt";
export const id="dl_14d5dd7c30f9a2971b6c";
export const url=new URL("../icons/rtt.svg?v=1a000d183935a9e721d68f115368691e3424f881180891f8a687718b9a66543b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
