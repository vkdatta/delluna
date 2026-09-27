export const name="suitcase-rolling-bold";
export const id="dl_3d6022c2d7fac5767be2";
export const url=new URL("../icons/suitcase-rolling-bold.svg?v=c477bf195a65103593fe63c0ff2555bfe2a96d1c3f256d3247dea617d6c4a5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
