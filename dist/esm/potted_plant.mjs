export const name="potted_plant";
export const id="dl_8d3e218f6dbbc0b926b6";
export const url=new URL("../icons/potted_plant.svg?v=9bb765364e042dd9e1d2e06df2c15d16c54f73cd48ad84c97f29a64d3a697018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
