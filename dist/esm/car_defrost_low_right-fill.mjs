export const name="car_defrost_low_right-fill";
export const id="dl_66c3086ec1b47178802b";
export const url=new URL("../icons/car_defrost_low_right-fill.svg?v=7e398c7cca5380583e04b9b515f0fb96d81b794b9d5f996727be94b89199e9a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
