export const name="high-definition";
export const id="dl_df89a8926a6b4d8bacc0";
export const url=new URL("../icons/high-definition.svg?v=3dbf6d9179ec75c64b3095f2bb609cafb7908c07f7112de00624428ea01d1b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
