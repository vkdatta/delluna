export const name="fork-knife-fill";
export const id="dl_78e1b7a60d74405fbef9";
export const url=new URL("../icons/fork-knife-fill.svg?v=ff917789bb287fb51e80f346f5bf5cf96e2c4cf56d2637c4fe1d0b1238694024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
