export const name="pi-fill";
export const id="dl_d4544f5aa7784fedb9f8";
export const url=new URL("../icons/pi-fill.svg?v=4d43f1ecebb0083692bf3ff8c420d4679c03ae32f76f8719b6f630fe7214edf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
