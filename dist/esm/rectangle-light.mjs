export const name="rectangle-light";
export const id="dl_54e8dbfbb9ae486c8be2";
export const url=new URL("../icons/rectangle-light.svg?v=909bcf98a8aa53b4338c80cb0f573885208bce3c6d371a863d42492f335ec7d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
