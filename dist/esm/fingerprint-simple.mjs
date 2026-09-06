export const name="fingerprint-simple";
export const id="dl_3b3522aee20040c88ee9";
export const url=new URL("../icons/fingerprint-simple.svg?v=46d2f7149c8beba042bcc18276a3c7c3c52a412765a626e2b476a4d98f63cbff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
