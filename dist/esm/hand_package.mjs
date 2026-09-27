export const name="hand_package";
export const id="dl_a75748dd4b3c1be5985f";
export const url=new URL("../icons/hand_package.svg?v=8db7644fe5972a142093738b384f83af521afe5f8d14daac1cdcb9a0af9e57c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
