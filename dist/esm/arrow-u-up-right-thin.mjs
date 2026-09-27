export const name="arrow-u-up-right-thin";
export const id="dl_c373d2de3c7f44bf92ba";
export const url=new URL("../icons/arrow-u-up-right-thin.svg?v=7ed933e9740d4f5939f0e8ebf1329ea32afd4bf7967734bbe59861f51fd0a218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
