export const name="doorbell_3p";
export const id="dl_23ae7230fe775e7f3fa9";
export const url=new URL("../icons/doorbell_3p.svg?v=f59605afeea23ef180581e18df939e206ff8c4b442f98d394c65b095ee0573bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
