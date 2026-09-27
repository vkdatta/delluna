export const name="lightbulb_2-fill";
export const id="dl_474f8cfbe4c6cd93c142";
export const url=new URL("../icons/lightbulb_2-fill.svg?v=d404f3da53d2d94fc63b3255e87bea280768a65490ae5cb429e8a5cfba7f99aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
