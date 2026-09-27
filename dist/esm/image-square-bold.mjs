export const name="image-square-bold";
export const id="dl_fab369778b834f1eb4c2";
export const url=new URL("../icons/image-square-bold.svg?v=ca366b51770719de6beff6b26d63703ba060d8258d5fe6a4248031e35022e5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
