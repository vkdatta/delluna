export const name="user-check-duotone";
export const id="dl_cd07bef6019709acb698";
export const url=new URL("../icons/user-check-duotone.svg?v=3e82f7108c6a6dbd2561fa4a8be79c04e53618a98503ab2c6c18a91aa09b75aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
