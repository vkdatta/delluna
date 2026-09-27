export const name="calendar_meal-fill";
export const id="dl_eee2597285191b323292";
export const url=new URL("../icons/calendar_meal-fill.svg?v=f294ed677bc86686f70ca7f42e2036f5e7fd4de528a7f615e5476d18f8c7c3e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
