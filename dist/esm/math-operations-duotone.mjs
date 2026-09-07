export const name="math-operations-duotone";
export const id="dl_951678d893cf42af9fcc";
export const url=new URL("../icons/math-operations-duotone.svg?v=9c3be28aed5b6590655abc241a4c6f4a337a12331a5933f679dab9eefc3cc978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
