export const name="arrow-line-down-fill";
export const id="dl_545a4847048a42a4ad55";
export const url=new URL("../icons/arrow-line-down-fill.svg?v=f39f9cb2d3593ca52ca31b5f7353c23a86ff16a3965ed374f3282fce6bc04ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
