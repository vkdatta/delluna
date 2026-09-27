export const name="smiley-angry-light";
export const id="dl_640fae5f366fc5931f77";
export const url=new URL("../icons/smiley-angry-light.svg?v=ee5667bca1a68c7708541dd2ce4c2fda3d8798e2024d9c68aceded7a4da56a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
