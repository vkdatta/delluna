export const name="union-duotone";
export const id="dl_d1ed9d2a31f6578a1d17";
export const url=new URL("../icons/union-duotone.svg?v=0371d076f564267363d24a7938d71d0e5b207859ccc6beca8f062ec8e16ed8bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
