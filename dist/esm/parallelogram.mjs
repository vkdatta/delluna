export const name="parallelogram";
export const id="dl_65eabfd299db434b8039";
export const url=new URL("../icons/parallelogram.svg?v=06fb2630fafba4cbc9f3a50c06799d5284407383ff7b4fa9cdfd86f01767fd5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
