export const name="function-fill";
export const id="dl_b93b10347d3c4ceba0bf";
export const url=new URL("../icons/function-fill.svg?v=d07f3aa6087f922e0bfa3dc02fb79cec388b300446872390d1f3911605d7d0d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
