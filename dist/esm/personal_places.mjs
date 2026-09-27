export const name="personal_places";
export const id="dl_f7cdfbd8647331ffe142";
export const url=new URL("../icons/personal_places.svg?v=87c63a4bf062fc46164891d7a244f9a97f0332bb7a74113ab0bb426442b1f760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
