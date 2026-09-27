export const name="calendar-dots-thin";
export const id="dl_b360bc1a44cf4c2291f5";
export const url=new URL("../icons/calendar-dots-thin.svg?v=5ae21ab2875857d453271e5b5b0413f72d067de5938a8578c1ca4ad1a246a78f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
