export const name="lucid_2-lollipop";
export const id="dl_171591a433b24eaa9578";
export const url=new URL("../icons/lucid_2-lollipop.svg?v=0261d1acb765e8d1e903ff59e738507dcb54295ae543148bee63087b1638e42d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
