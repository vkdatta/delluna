export const name="math-operations-duotone";
export const id="dl_951678d893cf42af9fcc";
export const url=new URL("../icons/math-operations-duotone.svg?v=27a8f81f86f5357802f4b7a56f95fdd73ee9b16d3206e83a6077b3532d2815b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
