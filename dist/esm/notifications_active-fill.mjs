export const name="notifications_active-fill";
export const id="dl_831573401f8f70ff99d9";
export const url=new URL("../icons/notifications_active-fill.svg?v=23ad9b8441f1dd855217d02a73566ba4720f6200124a964d2829b10fb995e222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
