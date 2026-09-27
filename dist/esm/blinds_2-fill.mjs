export const name="blinds_2-fill";
export const id="dl_548f804fc1f471ee2253";
export const url=new URL("../icons/blinds_2-fill.svg?v=c8662e5ef00d18c8566a8fc793a6e408fc3992dafd64766b3e13c2ee033002e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
