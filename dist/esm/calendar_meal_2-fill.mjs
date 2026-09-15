export const name="calendar_meal_2-fill";
export const id="dl_2f1c05d01af140819c0d";
export const url=new URL("../icons/C/calendar_meal_2-fill.svg?v=6c5a1c4bb81f2a75aded7d7576b6231fd7b76224c7d696fb829a4cb71fdf68db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
