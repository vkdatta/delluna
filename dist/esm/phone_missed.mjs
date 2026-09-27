export const name="phone_missed";
export const id="dl_3b00588f2f4b094eb1ae";
export const url=new URL("../icons/phone_missed.svg?v=cbd70887cfd2d61aeb27b3e80e597672f6797d24f699aebd4d475f40f801c856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
