export const name="campaign";
export const id="dl_32e67e34c3a91366ae27";
export const url=new URL("../icons/campaign.svg?v=1654cd2e1e10f1dd46640ef4caed8e4a0dce47d0caf6d13e3fa4ad0f014f4d77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
