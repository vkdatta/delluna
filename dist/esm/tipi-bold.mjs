export const name="tipi-bold";
export const id="dl_797ce4fe30c5843ab399";
export const url=new URL("../icons/tipi-bold.svg?v=20cca9130fc3737f4054354003598d17a6d033b25b353ce0da0971d35666e791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
