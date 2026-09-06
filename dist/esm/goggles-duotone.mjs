export const name="goggles-duotone";
export const id="dl_ffec382b887b4ce99695";
export const url=new URL("../icons/goggles-duotone.svg?v=eb25df03ac198ab377d088dbf748b70bf0e466b260d9d4d39dd4ad756c61f9ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
