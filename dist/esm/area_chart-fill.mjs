export const name="area_chart-fill";
export const id="dl_e6e121fd195f45b39d6a";
export const url=new URL("../icons/A/area_chart-fill.svg?v=137e2619a4d04f3c84c9b3b43a2b2cc62a9205493c9a3a6de0febc276a2529fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
