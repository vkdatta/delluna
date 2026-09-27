export const name="mouse-right-click-fill";
export const id="dl_a5f2a1683e5f4562a1a0";
export const url=new URL("../icons/mouse-right-click-fill.svg?v=414797ca175889ddef917249b2f9bdf1d074944f0eb0417c0762096464db3eba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
