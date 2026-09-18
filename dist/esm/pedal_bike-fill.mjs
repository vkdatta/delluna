export const name="pedal_bike-fill";
export const id="dl_30594779401340b494de";
export const url=new URL("../icons/P/pedal_bike-fill.svg?v=f89e106e5abf9b0c45632c36d216f6184d53703c7c5f025ad70f0f018e0aa3b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
