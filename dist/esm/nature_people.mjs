export const name="nature_people";
export const id="dl_6a9caedfbd225cd0d767";
export const url=new URL("../icons/nature_people.svg?v=b86298ee74e3caa2935da4e26bb1941b66775bb594afd54e3398ac5ad5015420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
