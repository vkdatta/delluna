export const name="stat_minus_2-fill";
export const id="dl_6c62e5ecccb987a20753";
export const url=new URL("../icons/stat_minus_2-fill.svg?v=0554c8b84a2164b34c6794207bc31ccbd0aff2693941237c828907ec891acb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
