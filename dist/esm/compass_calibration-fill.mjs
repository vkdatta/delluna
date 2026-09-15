export const name="compass_calibration-fill";
export const id="dl_ecf73f050e894b18a61e";
export const url=new URL("../icons/C/compass_calibration-fill.svg?v=8531e3211b4824d1868276447ecba4f696a1d67db94bcb0bacbc80b4c7c32c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
