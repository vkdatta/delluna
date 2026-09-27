export const name="polygon-bold";
export const id="dl_152ea6bc145f49059a60";
export const url=new URL("../icons/polygon-bold.svg?v=be171328c62e2d3e1f768192854ad6a6612b0e5931a554e9e694c60b6b1b3175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
