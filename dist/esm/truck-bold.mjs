export const name="truck-bold";
export const id="dl_d5793db0b414e80fddff";
export const url=new URL("../icons/truck-bold.svg?v=c8824b635b54c9a5e9d73524bbac2327d44b0eb8c73bb98962137243987a4609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
