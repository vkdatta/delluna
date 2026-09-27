export const name="translate-duotone";
export const id="dl_b7876adfbbf8d9727539";
export const url=new URL("../icons/translate-duotone.svg?v=be801f28e0828ce49f85805fef27e56452047b3ad200127385f690591eed6949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
