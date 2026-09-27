export const name="regular_expression-fill";
export const id="dl_968bd4d0906a654d2032";
export const url=new URL("../icons/regular_expression-fill.svg?v=3fe5a91277eda9f394a4385996f9e589fe163c42262d725b1fa0d310d083626d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
