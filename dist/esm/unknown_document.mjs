export const name="unknown_document";
export const id="dl_3dec8a77b30d2ff82f4c";
export const url=new URL("../icons/unknown_document.svg?v=cebbad1a6a90610814931f36aeb7957d9f38e2aa4d766ea07160dc12284cdfbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
