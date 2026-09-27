export const name="graph-bold";
export const id="dl_2287915ac6f64b409b15";
export const url=new URL("../icons/graph-bold.svg?v=ae2df56f6e297619b4d9c54f6231d5ec2d2889a7ab8924384df03ff36992df1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
