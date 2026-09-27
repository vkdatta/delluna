export const name="tamper_detection_on-fill";
export const id="dl_0f9bdeec5d0bd13aee5a";
export const url=new URL("../icons/tamper_detection_on-fill.svg?v=1c523e16bfeef57fa865c0f67a3437e5e7a94453b765cb11a66e999f3a1c7da6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
