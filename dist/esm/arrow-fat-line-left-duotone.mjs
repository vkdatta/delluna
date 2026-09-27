export const name="arrow-fat-line-left-duotone";
export const id="dl_33ceefbacd004d0e992c";
export const url=new URL("../icons/arrow-fat-line-left-duotone.svg?v=a2508e7e3ee05c89ba7b9201f9af9c7a0981d33c7b1622b85b35d1361264bd33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
