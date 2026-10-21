export const name="virus";
export const id="dl_c25f8c197e3e49f0afc8";
export const url=new URL("../icons/assets/virus.svg?v=8c5669c67f17045ac009c1d2136174d8a994116d900e4847fdfec92f623af19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
