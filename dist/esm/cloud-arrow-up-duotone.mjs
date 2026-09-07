export const name="cloud-arrow-up-duotone";
export const id="dl_2d84c19ac0e64b58850c";
export const url=new URL("../icons/cloud-arrow-up-duotone.svg?v=4e08ed5b8730960d7fea46028f95f9ba8188860f5f54a799a8ed579ecf764bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
