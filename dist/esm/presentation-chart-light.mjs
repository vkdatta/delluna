export const name="presentation-chart-light";
export const id="dl_effa7880a7214de79e71";
export const url=new URL("../icons/presentation-chart-light.svg?v=df922731435a8a228a5a020718c135792290d8fb5631d1342c423d90487ae84f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
