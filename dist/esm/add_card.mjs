export const name="add_card";
export const id="dl_88a9f81003f4296c1b03";
export const url=new URL("../icons/add_card.svg?v=d4a1a5d9ed4d2668e895371a2af9af3140132e3f89a2023ced2f6c4529d6e112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
