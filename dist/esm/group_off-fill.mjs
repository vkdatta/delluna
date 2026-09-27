export const name="group_off-fill";
export const id="dl_32715fca4fb762bcf7be";
export const url=new URL("../icons/group_off-fill.svg?v=9f04034271c8662dbd4200644206998c1609f5276f4d345742be13d776f0538c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
