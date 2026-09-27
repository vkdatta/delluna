export const name="star-duotone";
export const id="dl_ea3a399903f8d2a09625";
export const url=new URL("../icons/star-duotone.svg?v=abbb6452d569941c1f36d717c9590c26b90dcf1d0c6c504987b6c41d5f48f90b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
