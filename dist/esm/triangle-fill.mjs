export const name="triangle-fill";
export const id="dl_eed14d079a204dafb320";
export const url=new URL("../icons/T/triangle-fill.svg?v=d5833a0a16764d987b6c7660455af76acaf01942113f5dcdb3b1a1d783d9c361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
