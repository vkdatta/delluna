export const name="vacuum_2_on-fill";
export const id="dl_932a72be272a1dca249f";
export const url=new URL("../icons/vacuum_2_on-fill.svg?v=c00011adc15bb1256952ebe4ee4a5aab0885de7eb699fbe4063e4d77c71fccb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
