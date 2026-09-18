export const name="triangle_circle";
export const id="dl_2f3e16b61dad4f22b97a";
export const url=new URL("../icons/triangle_circle.svg?v=826b3172c4a91d721770eeefca0590345fa1ca2cdae5e3f0994c8858d4ca26ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
