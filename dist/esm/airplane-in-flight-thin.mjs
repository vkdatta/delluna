export const name="airplane-in-flight-thin";
export const id="dl_efec250fba2a4e84b315";
export const url=new URL("../icons/airplane-in-flight-thin.svg?v=ed53405d85314da445b6f4774efe43f81ad666c9f131d7459c45fc896bad4c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
