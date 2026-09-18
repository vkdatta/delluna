export const name="unpaved_road-fill";
export const id="dl_6541c8e6d774462c8ae1";
export const url=new URL("../icons/U/unpaved_road-fill.svg?v=00572bb7d54cf665b309fd66e530a7b543aa14dfbb07881f42c659a59eb9b903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
