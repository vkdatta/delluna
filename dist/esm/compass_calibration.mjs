export const name="compass_calibration";
export const id="dl_5aabda19534ba23e5788";
export const url=new URL("../icons/compass_calibration.svg?v=7c56cca85abdcc1da76c7f62436849229117ab3a04fbbe11b7f155845b59b76d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
