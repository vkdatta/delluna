export const name="warehouse-duotone";
export const id="dl_0bce82ba4556fb2222e6";
export const url=new URL("../icons/warehouse-duotone.svg?v=4d6515959792c8086051786d114c6be13a786194bab62c962f2ab26c3d85e7fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
