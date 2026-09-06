export const name="rocket-duotone";
export const id="dl_371b8c97adf645f7a296";
export const url=new URL("../icons/rocket-duotone.svg?v=c3be115f1b9ec08db65b9ad3214407eb6cf2da1a5943b7425a5410b490c8059b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
