export const name="device-mobile";
export const id="dl_4cd3b75e8ef544828a17";
export const url=new URL("../icons/device-mobile.svg?v=6c32f14295873a06878acb8147117f6f31a08a25cef1d897005493dea88d33ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
