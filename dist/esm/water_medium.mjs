export const name="water_medium";
export const id="dl_da27a289d70d41508cb1";
export const url=new URL("../icons/water_medium.svg?v=ae1361ee191791bbc460e36ee393782cda0a3970e15c95f15e237170e8ea9e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
