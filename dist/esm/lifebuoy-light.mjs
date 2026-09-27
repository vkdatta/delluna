export const name="lifebuoy-light";
export const id="dl_5ce75da68fe242f0b13b";
export const url=new URL("../icons/lifebuoy-light.svg?v=c81f2d072cba1481db2f8154bdba52f1f3d51384442d900a4d69e2d5645d7bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
