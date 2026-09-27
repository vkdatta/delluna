export const name="data_loss_prevention-fill";
export const id="dl_a4efb52ccfc88c7b5622";
export const url=new URL("../icons/data_loss_prevention-fill.svg?v=dd6de3be0c2e781eabcaa0b9b206af50ca3aadf563de5d95af75e76a253cb78a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
