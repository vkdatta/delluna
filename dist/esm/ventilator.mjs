export const name="ventilator";
export const id="dl_303820bd080b97b5f45b";
export const url=new URL("../icons/ventilator.svg?v=0370806f5b28e41fa4e17c3359e40597aac4ddfbf5fcbcc1babb4fede0507dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
