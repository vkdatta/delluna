export const name="road-horizon-duotone";
export const id="dl_ab477c3d8ac8415e93ab";
export const url=new URL("../icons/road-horizon-duotone.svg?v=f6fd2a19a632fc3b759a0136a653b9ea0a56aed71f7cb6422ce5a27f2951cc56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
