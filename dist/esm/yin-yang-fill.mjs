export const name="yin-yang-fill";
export const id="dl_fe06fdffa03a57b8770c";
export const url=new URL("../icons/yin-yang-fill.svg?v=b270a31f8cb0d917793bdf8db573c0614feb11f4b74e294f174371a01a15f644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
