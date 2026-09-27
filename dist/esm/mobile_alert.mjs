export const name="mobile_alert";
export const id="dl_1ecef5a726176fb1d1ab";
export const url=new URL("../icons/mobile_alert.svg?v=85705129b5900db94e19ea7b1287eac97df08588e87e6cf57179cc448173aa05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
