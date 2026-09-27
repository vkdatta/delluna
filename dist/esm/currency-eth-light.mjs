export const name="currency-eth-light";
export const id="dl_723a34a47bb84287ba6c";
export const url=new URL("../icons/currency-eth-light.svg?v=05d785f9a0f7feac4682a1a83829dac6428338b314f04036759e42418be0aca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
