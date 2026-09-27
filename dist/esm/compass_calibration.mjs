export const name="compass_calibration";
export const id="dl_e18c4460ad1f29baf37d";
export const url=new URL("../icons/compass_calibration.svg?v=a3e76c94caeb54c005a169e080b27642d2355b1498966a4c83f0c1750621020f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
