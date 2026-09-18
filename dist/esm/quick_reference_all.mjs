export const name="quick_reference_all";
export const id="dl_b8a1e9942851425b98be";
export const url=new URL("../icons/quick_reference_all.svg?v=586a622c3ac9655ca3337389f385d0a58d5094cc9bd105eac92baac519d7b0c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
