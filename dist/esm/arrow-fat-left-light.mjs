export const name="arrow-fat-left-light";
export const id="dl_3a64aadf0fcc41619815";
export const url=new URL("../icons/arrow-fat-left-light.svg?v=dabdd1cfd309facafe04755203431334472f3b5761cfcb4ebc190695003c9918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
