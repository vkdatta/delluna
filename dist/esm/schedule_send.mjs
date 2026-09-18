export const name="schedule_send";
export const id="dl_90527f183c6b44cf887f";
export const url=new URL("../icons/schedule_send.svg?v=2857222b6826321eb061d1a63782fcd0dcb2f8d7853a026c12a917246d95581f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
