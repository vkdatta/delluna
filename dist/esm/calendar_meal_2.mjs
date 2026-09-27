export const name="calendar_meal_2";
export const id="dl_234587ad557c1255906d";
export const url=new URL("../icons/calendar_meal_2.svg?v=73c2443143f3632995b392d5d7388541906fdc7432d221bada5e84851fa25f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
