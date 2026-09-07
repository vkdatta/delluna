export const name="suitcase-rolling-duotone";
export const id="dl_6c052f79da7245508e39";
export const url=new URL("../icons/S/suitcase-rolling-duotone.svg?v=90ffc7c8b909373f515f8e6931b1ad204b460ef06c7a772665f1a4c2a6a6480c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
