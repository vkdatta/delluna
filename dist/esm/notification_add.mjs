export const name="notification_add";
export const id="dl_3b5a2dcb9b19c2a53641";
export const url=new URL("../icons/notification_add.svg?v=132bcc3dc722bfaca78907cf0fd04075238652a9f5b4b0661bdb2c491764ac9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
