export const name="thermometer-hot-light";
export const id="dl_8fb2f25af5b416ee0be8";
export const url=new URL("../icons/thermometer-hot-light.svg?v=9ed6e89c46c29cc19e30f90846096a589e9f98a954224998b3580d5a49d1f2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
