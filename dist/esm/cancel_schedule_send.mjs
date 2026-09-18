export const name="cancel_schedule_send";
export const id="dl_5b2531a454e7403ab3b5";
export const url=new URL("../icons/cancel_schedule_send.svg?v=bc095075faa6c258d8a766375c2649201a4f4ba66fe198f1f7f577c78262a636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
