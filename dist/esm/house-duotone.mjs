export const name="house-duotone";
export const id="dl_26a0ab370547400cbb9a";
export const url=new URL("../icons/house-duotone.svg?v=e1e033caf16362ce357d840f5c7fc447cdd57143a5170d8dbf7738caa0757aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
