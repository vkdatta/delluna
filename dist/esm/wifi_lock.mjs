export const name="wifi_lock";
export const id="dl_c495ed0b364e5d2c902a";
export const url=new URL("../icons/wifi_lock.svg?v=7f8cf9da4c5974a6e559dc06bc6a7df7191604f9344b6428c063092301d97b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
