export const name="number-square-nine-bold";
export const id="dl_b8cf4348bc954e4ba637";
export const url=new URL("../icons/number-square-nine-bold.svg?v=686dab3f5a0b1b939e7e8baf84741182177dcbb4d421d086f30dea1b45053239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
