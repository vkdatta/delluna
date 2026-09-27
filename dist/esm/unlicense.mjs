export const name="unlicense";
export const id="dl_ae41b1de9f4faa586be9";
export const url=new URL("../icons/unlicense.svg?v=2d74fa10136ed294e0ec530baea05d3523f9545b8687af82760b830a9870f023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
