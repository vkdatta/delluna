export const name="hourglass-simple-light";
export const id="dl_a9e0f68f62944aaebcee";
export const url=new URL("../icons/hourglass-simple-light.svg?v=71f91fc306adedf233d1b8e98874e6824da56c5e30c4896a22e2849aa94d1ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
