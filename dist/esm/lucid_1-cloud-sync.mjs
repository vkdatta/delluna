export const name="lucid_1-cloud-sync";
export const id="dl_d0ea3b78009640a1b672";
export const url=new URL("../icons/lucid_1-cloud-sync.svg?v=1930cf8e9297493f4df24b0bc26ebd2c56970a5dbea2e05a3761cc8b9864d176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
