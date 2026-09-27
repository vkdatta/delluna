export const name="cancel-fill";
export const id="dl_87a04df82a76fbd5c91b";
export const url=new URL("../icons/cancel-fill.svg?v=ba2c2a2b1f31160718fce36aa6954c89351207b6bc4b76be1edd020fcca2f586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
