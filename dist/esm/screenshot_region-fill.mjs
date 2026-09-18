export const name="screenshot_region-fill";
export const id="dl_69aed3bf04e1425ead18";
export const url=new URL("../icons/S/screenshot_region-fill.svg?v=e981e0b780964e0138b7830643d33b5552e504756b4eae28eb1d4d04c7693ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
