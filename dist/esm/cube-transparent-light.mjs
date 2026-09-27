export const name="cube-transparent-light";
export const id="dl_c2b62a14937d43fab2fe";
export const url=new URL("../icons/cube-transparent-light.svg?v=32a73858d6a9dd1391bdb026bd06408147b748987d9348fca4fc7d28b23b47fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
