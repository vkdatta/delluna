export const name="zone_person_urgent-fill";
export const id="dl_42fc82e28f3a317757dd";
export const url=new URL("../icons/zone_person_urgent-fill.svg?v=1b7e677a1cfbfeba39e35c870e0e19781a0e1dcaaee1a05903420f0b91cdfd40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
