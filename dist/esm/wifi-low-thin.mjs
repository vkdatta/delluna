export const name="wifi-low-thin";
export const id="dl_da83c7b36849485cab84";
export const url=new URL("../icons/W/wifi-low-thin.svg?v=cb3bcd3ceb7d863d5f4e33edff2d8331304814dd731c8ba295c15505253bae97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
