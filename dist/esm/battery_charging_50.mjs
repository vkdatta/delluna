export const name="battery_charging_50";
export const id="dl_c9dab383e6b94d569cca";
export const url=new URL("../icons/B/battery_charging_50.svg?v=fb45e3fb8528ab6928db3837305deaa13addbd6f699b9bf123bd91df4b89ceed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
