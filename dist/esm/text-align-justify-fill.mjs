export const name="text-align-justify-fill";
export const id="dl_a14cb9f79b8db8533103";
export const url=new URL("../icons/text-align-justify-fill.svg?v=b1f4b57f32a86d05a9e520d98a843bd5ad77763673ecfe0448383e582caa2e45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
