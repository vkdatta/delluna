export const name="tabs-fill";
export const id="dl_69801a7c91bf7a1ae7c5";
export const url=new URL("../icons/tabs-fill.svg?v=c5ee8b32a18ab66cfcd0f5db1ec7fb257f308aad072af6b185832a79c471d6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
