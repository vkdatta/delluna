export const name="calendar-star-thin";
export const id="dl_0664e955970a4e3abd9f";
export const url=new URL("../icons/calendar-star-thin.svg?v=4d0903987cb71dab3da0cb2bac13b1b1c3ee3728702cbde23bccecef57da7608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
