export const name="crown-cross-duotone";
export const id="dl_192a7f80a2f649e8a32f";
export const url=new URL("../icons/crown-cross-duotone.svg?v=d351716552c74dc2672a8f66c98ecceaa11753786bbe42abdba32df02df57f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
