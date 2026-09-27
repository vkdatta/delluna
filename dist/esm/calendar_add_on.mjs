export const name="calendar_add_on";
export const id="dl_3a5440d3de7079a97369";
export const url=new URL("../icons/calendar_add_on.svg?v=1f012bc9cab0af2568a137f915f89ca5090c144993775523de939c8f732237f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
