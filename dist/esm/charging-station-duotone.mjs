export const name="charging-station-duotone";
export const id="dl_45731072fbbc48adb8be";
export const url=new URL("../icons/charging-station-duotone.svg?v=e1ffc16d2105a300a69cdeebb33b538f0929d6006434e083a4c2d8f8e31637ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
