export const name="chart-bar-light";
export const id="dl_43b921c3799f4f2a89d5";
export const url=new URL("../icons/chart-bar-light.svg?v=571782aeac5d2a9c8e9e31088db112fd70457dfc13ffc53729dee10fe4761a06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
