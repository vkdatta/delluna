export const name="number-square-seven";
export const id="dl_f257ff2cab4e4fe99bb7";
export const url=new URL("../icons/number-square-seven.svg?v=2ca53c04dffb1c21f641079a0406436a64dda1850c5c3fb006f1b5d69f42a8e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
