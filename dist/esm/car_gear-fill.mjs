export const name="car_gear-fill";
export const id="dl_6c16ba4aa389b76563f6";
export const url=new URL("../icons/car_gear-fill.svg?v=a97b441708ed53c6aef5cf40859af9fdd6a66ded1f3b1a75657fb829003ddba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
