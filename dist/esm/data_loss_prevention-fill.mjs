export const name="data_loss_prevention-fill";
export const id="dl_6ae88177a9f249c29f97";
export const url=new URL("../icons/D/data_loss_prevention-fill.svg?v=5c053dac9c3bdcfdb41d9a728b2ef2f3ccacf198fd71a4301c9efdf6f1ed881a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
