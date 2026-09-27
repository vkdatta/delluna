export const name="printer-duotone";
export const id="dl_3bed07147cca4c6b9d14";
export const url=new URL("../icons/printer-duotone.svg?v=199978e70cd14fb89d4d1a62e82cc22ccbcf6122538c3c51690ad5754a29f93f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
