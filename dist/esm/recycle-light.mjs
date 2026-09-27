export const name="recycle-light";
export const id="dl_a221c619eaee4941bd19";
export const url=new URL("../icons/recycle-light.svg?v=064bfa26fec9d5dc8a931b93b309fc869c63c3e4e5f88f1d22328acd83d7bd72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
