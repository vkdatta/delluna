export const name="wifi-medium-light";
export const id="dl_7c7cefe5f71d78356cbf";
export const url=new URL("../icons/wifi-medium-light.svg?v=143daa7427f41da4bb5d3ceec60c1f9cc2045c49193d5c5c3a56b77b924ab6eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
