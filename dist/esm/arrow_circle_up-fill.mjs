export const name="arrow_circle_up-fill";
export const id="dl_2d3049f7270aa9531307";
export const url=new URL("../icons/arrow_circle_up-fill.svg?v=cbd308fd194acfb185bf662dfd2b675986df915d1052832600f5609cebef33de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
