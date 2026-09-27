export const name="bathroom";
export const id="dl_4399bed6a5543dd99402";
export const url=new URL("../icons/bathroom.svg?v=9e198cc13141cc553134661f25ad7302f09e8bdd359d04183d9ddc63dcbbd2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
