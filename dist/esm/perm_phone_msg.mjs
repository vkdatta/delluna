export const name="perm_phone_msg";
export const id="dl_161a27b70f75f0bbd8a9";
export const url=new URL("../icons/perm_phone_msg.svg?v=6cda96d06b75cb042ddff96f98eccf2d89c531c8ee2c41e8aefc00f3b4024c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
