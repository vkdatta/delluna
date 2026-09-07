export const name="lucid_2-loader-pinwheel";
export const id="dl_ef4d844ddb1f49d29e34";
export const url=new URL("../icons/lucid_2-loader-pinwheel.svg?v=edd3b71d10a5009796ade9d80ce6630292cc302e16ed579da5c81f5ea3df73b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
