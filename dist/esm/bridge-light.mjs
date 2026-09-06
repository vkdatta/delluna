export const name="bridge-light";
export const id="dl_bc5fb4423ee441b99d99";
export const url=new URL("../icons/bridge-light.svg?v=e8528024aabdfe25cc68253694ea438890aaf8bdf21ea107c596c816ad7f10d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
