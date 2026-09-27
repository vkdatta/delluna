export const name="arrow-right-duotone";
export const id="dl_84c73ee271e04b0498fd";
export const url=new URL("../icons/arrow-right-duotone.svg?v=18a19a53cac770eef2224cde4aa96dbcdacd8184a6f9031e149789dc37ea53ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
