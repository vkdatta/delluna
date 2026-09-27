export const name="user-round-check";
export const id="dl_e2c37f8fbebb4822b60e";
export const url=new URL("../icons/user-round-check.svg?v=ad7388834f95f471a4cf1a70f113c70b57c88c6688c96aa5ab281f8d695d5a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
