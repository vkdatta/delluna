export const name="arrow-square-down-left-duotone";
export const id="dl_c93f71de848c4c9aa11b";
export const url=new URL("../icons/arrow-square-down-left-duotone.svg?v=9066e0dbbb658ecec33eb605610a61b20c23894ae4b48ebb6982f51f35a813d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
