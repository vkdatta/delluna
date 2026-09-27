export const name="cursor-click-duotone";
export const id="dl_2360548192c14abea3dc";
export const url=new URL("../icons/cursor-click-duotone.svg?v=00e43efac68c637b8bb70959e56aafd2e90685db9a533d6edaca7ff2092489f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
