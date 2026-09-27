export const name="boat_railway-fill";
export const id="dl_96046170afd93b1591c9";
export const url=new URL("../icons/boat_railway-fill.svg?v=6937b504837ffcb4ce061b3ac98a58c6fdd22fbb6a40743b1b8255e72eb26caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
