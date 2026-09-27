export const name="lucid_3-rainbow";
export const id="dl_ba14e86e8c4f48bcbde9";
export const url=new URL("../icons/lucid_3-rainbow.svg?v=2cd53dca0471eb720b454f49133f4ea846668bdbba0dd55ec61b62524ea2e662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
