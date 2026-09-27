export const name="phone-plus-fill";
export const id="dl_a46f9b092a2f46d0b4ef";
export const url=new URL("../icons/phone-plus-fill.svg?v=8feb5e715ae891f38aa20d514b922c13043a4072d057badb9586aa8323becf60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
