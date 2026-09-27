export const name="wb_twilight_2";
export const id="dl_d069c9d031a2d91d72f3";
export const url=new URL("../icons/wb_twilight_2.svg?v=95b980be659002e9dda36d19ee70b384c66ba05a8ba4edea43f94fbd1d2e9b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
