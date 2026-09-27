export const name="chalkboard-simple-fill";
export const id="dl_0c0b95571a2e482db2fd";
export const url=new URL("../icons/chalkboard-simple-fill.svg?v=bc707e275474d23cfd2e06109bd9e92d4d78e7c80b40cdfcce9d646a86a84e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
