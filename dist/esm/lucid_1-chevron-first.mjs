export const name="lucid_1-chevron-first";
export const id="dl_1f18f8eb418e4569ace8";
export const url=new URL("../icons/lucid_1-chevron-first.svg?v=2a591afad6bee9607a6228ef33a9d813db61543cbe096f8793335efcc403074c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
