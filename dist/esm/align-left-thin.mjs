export const name="align-left-thin";
export const id="dl_3c23fd36b2384723bff7";
export const url=new URL("../icons/align-left-thin.svg?v=5072051e2426cf4be38aabd1981d129e4a9da058b008649670c0b3c573b07aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
