export const name="notification_multiple";
export const id="dl_f425836c1747502ac988";
export const url=new URL("../icons/notification_multiple.svg?v=05d7a4da5885bd9c7bf54eb0b0712971cf5feee85a0c6cfc3f900dbff7154a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
