export const name="thermometer_gain";
export const id="dl_7cb552d9540a414ebd92";
export const url=new URL("../icons/thermometer_gain.svg?v=8effa241704fcdbdc92e366ff596cf737dd111888189c7de3059a45baf7cd2d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
