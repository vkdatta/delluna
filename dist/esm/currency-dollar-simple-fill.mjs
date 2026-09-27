export const name="currency-dollar-simple-fill";
export const id="dl_f3dd3ee771964e4b9f81";
export const url=new URL("../icons/currency-dollar-simple-fill.svg?v=c543f2a876fc4ce56481130588d6b93ffc1d83b8ee709d57a395de37df2a80c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
