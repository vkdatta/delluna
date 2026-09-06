export const name="champagne-bold";
export const id="dl_3f0173807a08495eabab";
export const url=new URL("../icons/champagne-bold.svg?v=010c68b2a1368a189e4755b9043afb47ab1d3f3c4cbf1838d0a83490cfab60c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
