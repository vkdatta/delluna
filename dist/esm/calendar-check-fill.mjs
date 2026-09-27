export const name="calendar-check-fill";
export const id="dl_245ba2370f06448fa124";
export const url=new URL("../icons/calendar-check-fill.svg?v=8196ae342cc6aa087f08654b7cc25310db2843cdb509ccb0ca74d2023e06e33a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
