export const name="function-fill";
export const id="dl_b93b10347d3c4ceba0bf";
export const url=new URL("../icons/function-fill.svg?v=cc9a6e3b7e0248a53186a3f09649f9c82618fd33310badfe5cf918519435f73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
