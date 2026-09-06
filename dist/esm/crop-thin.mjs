export const name="crop-thin";
export const id="dl_104daecda46e4458bcc6";
export const url=new URL("../icons/crop-thin.svg?v=fbcc539bed3c8a57749772ac2f7671a5f536ffe07c47558b7358f266cac2c2b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
