export const name="bulldozer-duotone";
export const id="dl_364d4cebaae44e838828";
export const url=new URL("../icons/bulldozer-duotone.svg?v=8f0ccc4d65b423f1b5238c830b054e07ee2dcd11f8369bc6c7aaf6b30494f727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
