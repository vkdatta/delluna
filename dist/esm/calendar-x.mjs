export const name="calendar-x";
export const id="dl_d86c3fd6fe0441c6aa27";
export const url=new URL("../icons/calendar-x.svg?v=b7807c4833902017a7e27120d6857ee9bbaed9e260e7a58255d5667b078d0119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
