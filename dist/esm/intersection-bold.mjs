export const name="intersection-bold";
export const id="dl_d9e1902936534bc28603";
export const url=new URL("../icons/intersection-bold.svg?v=72ad7a93e6b7a060c0a51b1202bc4711c2791f13f29760c55245e30c645b1649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
