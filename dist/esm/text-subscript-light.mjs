export const name="text-subscript-light";
export const id="dl_a96e8cc735163720b62c";
export const url=new URL("../icons/text-subscript-light.svg?v=a3df2bfec48df1fc018e4b174a4b6e4c978910ecd3d3873039b0f2bebe34e747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
