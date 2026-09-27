export const name="filter_remove";
export const id="dl_aefbdc3012bc8e84885a";
export const url=new URL("../icons/filter_remove.svg?v=5fe57364ca283f19b29dee6de5b60790363a04540c65bc9a0d7f3cbef0c8227f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
