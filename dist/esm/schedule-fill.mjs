export const name="schedule-fill";
export const id="dl_d1d3a1a37a042576789f";
export const url=new URL("../icons/schedule-fill.svg?v=d0b1c97f523f5f86f4cb9f49281d1b0aa30f36f49d0046cb115904d5bc30d066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
