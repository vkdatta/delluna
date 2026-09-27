export const name="seat-light";
export const id="dl_9bf25747cfd1ef444935";
export const url=new URL("../icons/seat-light.svg?v=9c3b300baae07116167296eedcba56607a979a710fba7c268a61dd5ae9a10070",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
