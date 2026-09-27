export const name="20mp-fill";
export const id="dl_81e64aaf9661d23313da";
export const url=new URL("../icons/20mp-fill.svg?v=d8465c6462b6e819df4ce8d1b68d868de93eb110eaef1202fdabcd21ab568d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
