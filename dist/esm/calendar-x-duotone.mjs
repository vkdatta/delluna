export const name="calendar-x-duotone";
export const id="dl_f8a9e837807148858d8b";
export const url=new URL("../icons/calendar-x-duotone.svg?v=628dab743b06adefc877ccaaf2f53dc5b4fe11c3ad7c82d8847ad78f1270d899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
