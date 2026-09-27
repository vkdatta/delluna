export const name="position_bottom_right-fill";
export const id="dl_31b8b0be3513158cd11f";
export const url=new URL("../icons/position_bottom_right-fill.svg?v=0bba7a721dfa96d3422a5b29c297ba95323ed180cf39198d3400f54ff814dbe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
