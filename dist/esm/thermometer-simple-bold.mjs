export const name="thermometer-simple-bold";
export const id="dl_40791185e9fece1e76b9";
export const url=new URL("../icons/thermometer-simple-bold.svg?v=e7c41869092072c817211fb561d3c9a16c382281d8ed327d4ee6ad08792a6213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
