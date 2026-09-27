export const name="battery_charging_80_2";
export const id="dl_56a9415a1d222486d2f1";
export const url=new URL("../icons/battery_charging_80_2.svg?v=6c745178bc2f60c734087418bc08e263dccb77cfc95da945d58dc47b57e4c927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
