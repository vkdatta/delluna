export const name="monitor-arrow-up-duotone";
export const id="dl_e7a7cfac107b40339a96";
export const url=new URL("../icons/monitor-arrow-up-duotone.svg?v=b751a24f05d145080c7a4b56576e0a4a62fb1eb9ec7deb7e5dc1b0e34a39d266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
