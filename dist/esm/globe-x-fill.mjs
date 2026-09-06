export const name="globe-x-fill";
export const id="dl_38d04d4039cc420c9378";
export const url=new URL("../icons/globe-x-fill.svg?v=095f517b750309985fbb00b9d8510453299370c0ea2cab3a5aa2ba15b408e364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
