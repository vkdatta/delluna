export const name="lucid_1-closed-caption";
export const id="dl_8903e1963d664ab6afdc";
export const url=new URL("../icons/lucid_1-closed-caption.svg?v=aed9e7ccc1f16f7d5a282b09fa4e54e83c38cf25e56f6a65ba61672696591a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
