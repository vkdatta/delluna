export const name="calendar-plus";
export const id="dl_08055d559c574cdf804f";
export const url=new URL("../icons/calendar-plus.svg?v=ab73317c9cafd0233e5c4e27178a55a1d0dbc0eeed8ba61125b2d9e2ad0deac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
