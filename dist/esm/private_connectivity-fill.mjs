export const name="private_connectivity-fill";
export const id="dl_5127e1921c8c71aa1e47";
export const url=new URL("../icons/private_connectivity-fill.svg?v=5fee89ba192401e3f8fcea9165b2287834ebc28938204718e63d3586d13a905e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
