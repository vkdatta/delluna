export const name="menstrual_health-fill";
export const id="dl_73400e05be6d7215af4d";
export const url=new URL("../icons/menstrual_health-fill.svg?v=6ace9e1c879352da1f36a46ddd69cf3049fb160c1769a5119e504b911eff9f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
