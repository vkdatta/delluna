export const name="garage_home-fill";
export const id="dl_7f8476642af06ff1234c";
export const url=new URL("../icons/garage_home-fill.svg?v=0c67a0c9f568e73b1d918f6491de72553688ac8efc42d43157117ad096a7bf86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
