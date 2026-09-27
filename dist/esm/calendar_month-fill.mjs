export const name="calendar_month-fill";
export const id="dl_2dacb1138ca8faa7f76d";
export const url=new URL("../icons/calendar_month-fill.svg?v=d6807755cf4e594ba0eede6485c5bd0837218619372f107cb21fbbdde049b7c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
