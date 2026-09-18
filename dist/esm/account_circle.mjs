export const name="account_circle";
export const id="dl_9eaae18c2dea45a1b88b";
export const url=new URL("../icons/account_circle.svg?v=5f755d9d945a8f2be02d9987231921d0d76b6713fe54d47fd5383985ff4012e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
