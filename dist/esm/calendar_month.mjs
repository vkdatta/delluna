export const name="calendar_month";
export const id="dl_453bcfc89f43df9abeae";
export const url=new URL("../icons/calendar_month.svg?v=c04e69d0233374906daf1282b2895082c92b8b33e3a84a186a659daa11c0044f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
