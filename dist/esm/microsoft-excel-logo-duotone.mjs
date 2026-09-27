export const name="microsoft-excel-logo-duotone";
export const id="dl_0f66939ea65847d39fa9";
export const url=new URL("../icons/microsoft-excel-logo-duotone.svg?v=4ba2acc0b78f694e05afd513f44f8b4c61a8e133a83e34385edc9e3f91fd72bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
