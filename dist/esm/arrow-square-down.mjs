export const name="arrow-square-down";
export const id="dl_4863a3d92be740329c70";
export const url=new URL("../icons/arrow-square-down.svg?v=8c20d04b9ad025657715c6cb35dedc7b2d83ef3cfb04e7d882537e6fb2463a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
