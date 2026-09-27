export const name="garage_money-fill";
export const id="dl_f0927fbad582d587cc99";
export const url=new URL("../icons/garage_money-fill.svg?v=db914520b9924d85d797550dfc77b72e76216c537dce7be3b220aedcfa022891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
