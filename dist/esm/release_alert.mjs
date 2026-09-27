export const name="release_alert";
export const id="dl_b5456f6290b76adadd62";
export const url=new URL("../icons/release_alert.svg?v=1048a34f334530636ae3a7f8bc0cac01719b13899f6aca5069fc8dd3439823b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
