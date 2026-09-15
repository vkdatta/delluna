export const name="battery_alert-fill";
export const id="dl_ba787dd26ecf4d4db9a5";
export const url=new URL("../icons/B/battery_alert-fill.svg?v=9250189d5e8e653ad0016788ef9bfb76ee0e7c06667ec5e11ad26d21802a28e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
