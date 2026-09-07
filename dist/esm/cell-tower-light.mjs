export const name="cell-tower-light";
export const id="dl_b819ae99c7294b9c90ec";
export const url=new URL("../icons/cell-tower-light.svg?v=a7bc010796bd1a24e51962bb36ad6a65f0410ac8a413f3f7b36aef8fd217ffe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
