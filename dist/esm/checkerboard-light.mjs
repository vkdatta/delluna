export const name="checkerboard-light";
export const id="dl_aed73dd364244a74b441";
export const url=new URL("../icons/checkerboard-light.svg?v=28204188018caf385329af4704df7f45ba780a6cd63afd3280d3c047576fc840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
