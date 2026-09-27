export const name="sd-fill";
export const id="dl_f40ef2dfca5db0ab24a0";
export const url=new URL("../icons/sd-fill.svg?v=2924f3baac20bef90c3f7b1da668816ffa3dbaafd93da95710cedbbf62dd8d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
