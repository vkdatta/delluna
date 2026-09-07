export const name="user-circle-plus-thin";
export const id="dl_da6c4c9b39e840d080ed";
export const url=new URL("../icons/U/user-circle-plus-thin.svg?v=87892093e5b8b2298291faf1f0d45f6ee26830b762f0f1e3ada020d5f413a45b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
