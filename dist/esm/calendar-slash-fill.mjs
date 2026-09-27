export const name="calendar-slash-fill";
export const id="dl_c9d15b31972f44f288c0";
export const url=new URL("../icons/calendar-slash-fill.svg?v=7fae721bbd694de4308d1e02a7fef166e41949c195711893697f52110895f187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
