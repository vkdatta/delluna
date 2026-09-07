export const name="yin-yang-fill";
export const id="dl_1bc424494b5c4471af99";
export const url=new URL("../icons/Y/yin-yang-fill.svg?v=0085fa788ea38fb346a2792e69acf47e352125fc61dc4df2395e0bba52ae52e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
