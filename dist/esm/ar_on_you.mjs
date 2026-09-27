export const name="ar_on_you";
export const id="dl_0fc04ad3878a41ed2dd3";
export const url=new URL("../icons/ar_on_you.svg?v=84a6947dfd282cdd2058eb5656b0dbf7201ba3dd18e85fdaa3ab53422b0d8a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
