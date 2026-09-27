export const name="cell-tower-fill";
export const id="dl_8b5a8c6b9b104d948ac4";
export const url=new URL("../icons/cell-tower-fill.svg?v=3e0ff51b95d70f1c9a8497bbd0b946f7d0b17cfee67915b351345a3015c5d792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
