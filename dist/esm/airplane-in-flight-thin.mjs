export const name="airplane-in-flight-thin";
export const id="dl_efec250fba2a4e84b315";
export const url=new URL("../icons/airplane-in-flight-thin.svg?v=2057d15822b2ff9c70d2b8d6a859997b9b6995318b146657da96f3e7d3672fbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
