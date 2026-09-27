export const name="liquor";
export const id="dl_7efda29318f48374b1e3";
export const url=new URL("../icons/liquor.svg?v=3bdda3da45eced0845f0c245f8403b1c56254c2c1b3879219c91f21c1e2189c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
