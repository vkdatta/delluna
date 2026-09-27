export const name="tilt_arrow_down-fill";
export const id="dl_33259e536613cf739311";
export const url=new URL("../icons/tilt_arrow_down-fill.svg?v=328fced41c7082f72042b973e7c4e698f09eaf32618f9bcd722a57d32a3c15fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
