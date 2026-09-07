export const name="x-logo-duotone";
export const id="dl_0d2463676295435c8567";
export const url=new URL("../icons/X/x-logo-duotone.svg?v=5f5fd9f630ea0322cc8a9e805e0d4eec386416d4a1c977a0b09812f1931f1e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
