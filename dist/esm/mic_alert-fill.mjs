export const name="mic_alert-fill";
export const id="dl_28c7c6c99710547c6fc8";
export const url=new URL("../icons/mic_alert-fill.svg?v=61b8f1323cdc257ec4b63f2a9f2010d10c026327af20db9fe75c58605711674a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
