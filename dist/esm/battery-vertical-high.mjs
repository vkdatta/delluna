export const name="battery-vertical-high";
export const id="dl_6d61066b8d534f1e9955";
export const url=new URL("../icons/battery-vertical-high.svg?v=228bf3c3862c79d48180a8179ef3af360c8d1af681715c2a57be7cd247457ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
