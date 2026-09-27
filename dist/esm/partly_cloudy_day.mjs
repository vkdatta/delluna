export const name="partly_cloudy_day";
export const id="dl_9cfa24c4631f63c342b8";
export const url=new URL("../icons/partly_cloudy_day.svg?v=94000f25ad77a8526ce5d2761fb5e7e8b38e1463104a6da8422a714ab56cf4a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
