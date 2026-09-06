export const name="paint-brush";
export const id="dl_6b4c978c35184018a6a3";
export const url=new URL("../icons/paint-brush.svg?v=71f96a0b1a20e671a4af66d3b6bfaa41cf01778ad858193515d0268f07666972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
