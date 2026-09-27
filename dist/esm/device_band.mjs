export const name="device_band";
export const id="dl_6d89039b955d87ccdac1";
export const url=new URL("../icons/device_band.svg?v=d238852f4496111c5106b1da169e4694fbc51603035b0a2ef592e65ac3bf52c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
