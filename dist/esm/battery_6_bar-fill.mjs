export const name="battery_6_bar-fill";
export const id="dl_f821ae93e76d45929be2";
export const url=new URL("../icons/battery_6_bar-fill.svg?v=2d0cabf26523e8763ae86888faea82f7d155ad0228009140b543d2297d38f851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
