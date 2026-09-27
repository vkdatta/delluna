export const name="deselect-fill";
export const id="dl_740f6ccadc63beb3dd2f";
export const url=new URL("../icons/deselect-fill.svg?v=9983c23f3428cce3a91b6f16ea7534e37c8f769579366b3ca947babee2c52cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
