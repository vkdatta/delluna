export const name="kebab_dining";
export const id="dl_afb69eaf952d43b585db";
export const url=new URL("../icons/kebab_dining.svg?v=44adb14e98121f71739b2304f98d995147d260344a7dae98b3a410751485a5dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
