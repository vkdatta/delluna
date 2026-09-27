export const name="docs_add_on";
export const id="dl_183d847879eff9d1e44d";
export const url=new URL("../icons/docs_add_on.svg?v=2489979c8a11e6026fb8b1e996f94f99577f01f92d769e97979f9ded9351abe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
