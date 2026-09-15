export const name="chair_alt-fill";
export const id="dl_a33ffb8d917b4530b28f";
export const url=new URL("../icons/C/chair_alt-fill.svg?v=26ce266d4a3ce194e49eb13f932959acdd48c9587bace03fc41a3602b197e5b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
