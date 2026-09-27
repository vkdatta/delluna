export const name="calendar-dots-thin";
export const id="dl_b360bc1a44cf4c2291f5";
export const url=new URL("../icons/calendar-dots-thin.svg?v=3bdc3c37afe4be479290b6dc0e36dafe22f149c3c01a96a23593ab86d9988021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
