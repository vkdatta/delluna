export const name="earbuds_2";
export const id="dl_f0c8280b9351eeeb2654";
export const url=new URL("../icons/earbuds_2.svg?v=adc048f5efc0b3c67eee6080e3eb071b69fb103accc78451cb70800eca4e4156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
