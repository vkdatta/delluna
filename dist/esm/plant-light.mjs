export const name="plant-light";
export const id="dl_d3822927675e498d9176";
export const url=new URL("../icons/plant-light.svg?v=36307a2ff2f3f434912faead8979f9833ba5dab06aaad66ce0ec87998ce9efa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
