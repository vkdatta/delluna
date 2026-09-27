export const name="steps-bold";
export const id="dl_a62fccd66e9933e29bb5";
export const url=new URL("../icons/steps-bold.svg?v=0cc19fe5cedb0ed9251f0a7bb56a19d947b351f717cbf943212888f60fb2ba34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
