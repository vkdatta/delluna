export const name="document_search";
export const id="dl_057c5bfe5dcf4fffb5a2";
export const url=new URL("../icons/document_search.svg?v=37ab756e8d70401772a735dc3e62ffc02ed9d7e04800fdfed8544b82bef35884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
