export const name="azm";
export const id="dl_b772647b77c2495985fa";
export const url=new URL("../icons/azm.svg?v=02b32477639f759d621944bece87870cbf2abf32dc73a0727a7a9f9c18cd5378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
