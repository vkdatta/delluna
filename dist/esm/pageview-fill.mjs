export const name="pageview-fill";
export const id="dl_1de57194cbca0e5643d4";
export const url=new URL("../icons/pageview-fill.svg?v=0229bd3276c17277f20e04c5062ac86174a9254c108d4282f0d5b8d9da072c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
