export const name="sensors_krx_off-fill";
export const id="dl_aa8ccbc003129b069713";
export const url=new URL("../icons/sensors_krx_off-fill.svg?v=b64e41f4163562e6d1a3c0734ec7efac27e5a3ae407117dfa226bcc751adb796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
