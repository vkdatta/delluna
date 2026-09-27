export const name="battery_plus";
export const id="dl_dd0d80c3724c92fc5905";
export const url=new URL("../icons/battery_plus.svg?v=247dfb283f4f1e9a36cdb47140859eb398bfb8a04783395f0b5d52960a22e847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
