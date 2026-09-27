export const name="16mp-fill";
export const id="dl_279326e97535146945c3";
export const url=new URL("../icons/16mp-fill.svg?v=98023faabc253adfb5cd3be1b904a57b4908e762a9ab18527eed0ec6a293b5a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
