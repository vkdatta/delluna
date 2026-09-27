export const name="dictionary";
export const id="dl_52fef063e3b0f2dbab70";
export const url=new URL("../icons/dictionary.svg?v=7e8967ac95afa592510bff8ba69b6ef8bc39878b5fc313442ff0d62b0585d30e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
