export const name="arrow-u-down-right";
export const id="dl_a696153ceb6b465fa9c9";
export const url=new URL("../icons/arrow-u-down-right.svg?v=6d2c99c51f81fa62e7db1e11cacadc7ae4a9b1c322d8428f4ca08f4d7e0c1194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
