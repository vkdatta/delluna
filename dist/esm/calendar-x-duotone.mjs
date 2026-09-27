export const name="calendar-x-duotone";
export const id="dl_f8a9e837807148858d8b";
export const url=new URL("../icons/calendar-x-duotone.svg?v=9cca47651776935a2ef446cbe95de2ca7ab8512e910c3f12da6e6b7fb3ddbe44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
