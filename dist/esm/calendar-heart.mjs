export const name="calendar-heart";
export const id="dl_a6c9001215594032991d";
export const url=new URL("../icons/calendar-heart.svg?v=600926769008e8aaa7cfa3616892f0835b4a53f7521735e89c22f648e66da3c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
