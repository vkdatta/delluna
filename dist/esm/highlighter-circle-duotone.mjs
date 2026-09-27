export const name="highlighter-circle-duotone";
export const id="dl_f17af43e403440e98283";
export const url=new URL("../icons/highlighter-circle-duotone.svg?v=21f6aa2107b71ca0c4d56a372d88de0649e1fcf61c385669bd91ff18ad035da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
