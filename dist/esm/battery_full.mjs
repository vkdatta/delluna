export const name="battery_full";
export const id="dl_28fe1ad910464ddd9872";
export const url=new URL("../icons/battery_full.svg?v=b4b165a614238ad2ea65698d53e3674692f72a99b6ce630e221afc5614806052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
