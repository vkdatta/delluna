export const name="less-than-bold";
export const id="dl_6c256ae87fcb4678a997";
export const url=new URL("../icons/less-than-bold.svg?v=e463a0e0e2250642fb777b6d893a9d962ab615beca00ecf5e858afb51f58b721",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
