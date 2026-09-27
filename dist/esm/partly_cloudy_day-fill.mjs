export const name="partly_cloudy_day-fill";
export const id="dl_855a19f45ff5fecd2aa1";
export const url=new URL("../icons/partly_cloudy_day-fill.svg?v=aff3f45190608cf434021e56db40fd9fe3463dcd26358ed023c14d4e877bf8a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
