export const name="mic_alert";
export const id="dl_c086677d55e65b783a09";
export const url=new URL("../icons/mic_alert.svg?v=ada557f6ecf9cc4c355cdf12f2dd4a88776680b42fadfbe2bab39c22cb644031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
