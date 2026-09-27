export const name="caret-double-down-duotone";
export const id="dl_05dc62861a274aa7be42";
export const url=new URL("../icons/caret-double-down-duotone.svg?v=49d66e87bdca4ca1b7e96794f1e82af814a9efeb445acf3445a3c5db386208ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
