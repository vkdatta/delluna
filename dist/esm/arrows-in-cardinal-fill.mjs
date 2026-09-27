export const name="arrows-in-cardinal-fill";
export const id="dl_3fafd6da0bdd49bdaa9e";
export const url=new URL("../icons/arrows-in-cardinal-fill.svg?v=5d946fd89f99c186a07fd3369f005782b88892aeec0ba0e27d3e67348f0633b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
