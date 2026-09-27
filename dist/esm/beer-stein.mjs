export const name="beer-stein";
export const id="dl_e31c5fc424c4450bbebb";
export const url=new URL("../icons/beer-stein.svg?v=08a412b2280122aca804344aea57bc0b90a21ef47c37cdb7fdc9eabff74284e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
