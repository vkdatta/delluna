export const name="thermometer_gain";
export const id="dl_bafb670fed3b04dd0174";
export const url=new URL("../icons/thermometer_gain.svg?v=6d837cc1e9637eb8f56b55a982b94b6c9f55c2cc92da0077e979dc275b4d6ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
