export const name="splitscreen_left";
export const id="dl_ded438a0d01fe3830b0a";
export const url=new URL("../icons/splitscreen_left.svg?v=f19be825664197213bd7ba12b076838f892982c566821c7f6e6f5aa66b8aa326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
