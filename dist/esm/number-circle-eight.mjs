export const name="number-circle-eight";
export const id="dl_1bd0d1cebc09415396fa";
export const url=new URL("../icons/number-circle-eight.svg?v=43e12a554e735a35ca08ff75620466cee44142b1fac362196ebeb01dc570c250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
