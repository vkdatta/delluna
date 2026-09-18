export const name="detector_battery-fill";
export const id="dl_967239727e084186873c";
export const url=new URL("../icons/detector_battery-fill.svg?v=4e5cdb81ac499dbad61384335759cc7be1bf91b72333a501d84c22518af260ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
