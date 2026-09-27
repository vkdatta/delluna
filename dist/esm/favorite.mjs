export const name="favorite";
export const id="dl_77246f4541dc95317340";
export const url=new URL("../icons/favorite.svg?v=b37ee0d348aad4819ffc9ce1d80dfed095e1de24ca8a126a2e03466af00e487e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
