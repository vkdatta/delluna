export const name="kitchen-fill";
export const id="dl_cf587cfcbaa82780e4e6";
export const url=new URL("../icons/kitchen-fill.svg?v=fbb92485e9a8bded174e4c4aa59b4f64332ad6a9c1631734f151aac2377e1870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
