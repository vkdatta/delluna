export const name="cloud-arrow-up-duotone";
export const id="dl_2d84c19ac0e64b58850c";
export const url=new URL("../icons/cloud-arrow-up-duotone.svg?v=4fde305ec134c8c480a55610134a0b542df5d3de21b9cdc1d51a06fcc7a54483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
