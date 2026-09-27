export const name="lucid_3-square-arrow-right-exit";
export const id="dl_61475b87842d4c158776";
export const url=new URL("../icons/lucid_3-square-arrow-right-exit.svg?v=163c4af2cce6bb5848224cc2f315db0f6543c74257edcdc8efe663a019f44f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
