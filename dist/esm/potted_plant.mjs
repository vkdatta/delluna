export const name="potted_plant";
export const id="dl_e3092b8bba2b396940b5";
export const url=new URL("../icons/potted_plant.svg?v=c8d3a83b8467b256af1cf375691a8ed0ab42ec30efe78d19a797954147a34e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
