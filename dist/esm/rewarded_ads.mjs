export const name="rewarded_ads";
export const id="dl_8015f2dea25b4b3693af";
export const url=new URL("../icons/rewarded_ads.svg?v=a9b08656463573e0ec001489f9877374d1c85e4aa57481b3ae6f8ba755690871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
