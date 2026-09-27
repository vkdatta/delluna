export const name="lucid_1-calendar-1";
export const id="dl_9efa12189ca64c24b6f8";
export const url=new URL("../icons/lucid_1-calendar-1.svg?v=5979912f9b6f26a3b9fdc3b4b1d36f8b0081ab089218096ee7ee16cdfc93a587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
