export const name="head-circuit-duotone";
export const id="dl_6050693f70bb497ba1ea";
export const url=new URL("../icons/head-circuit-duotone.svg?v=e49b36310c7b7c41749f7bc9d3956a4e746944381ba51210bfc8138038a0e8d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
