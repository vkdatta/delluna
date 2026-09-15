export const name="calendar_clock-fill";
export const id="dl_f5acbb8b9e3b45d1a0a4";
export const url=new URL("../icons/C/calendar_clock-fill.svg?v=1cf9b55ac2f5cec8338091a36e96367e07fb8019920808ef1ec1fa8198d51496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
