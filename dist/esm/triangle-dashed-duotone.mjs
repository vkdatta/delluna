export const name="triangle-dashed-duotone";
export const id="dl_0e88c8f8f938fae6e89c";
export const url=new URL("../icons/triangle-dashed-duotone.svg?v=1e96915b5d035faebee66907c387329e88e71ba73d958d491f76db0c60567026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
