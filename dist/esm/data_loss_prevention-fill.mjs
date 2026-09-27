export const name="data_loss_prevention-fill";
export const id="dl_fdbec400394453df6b53";
export const url=new URL("../icons/data_loss_prevention-fill.svg?v=cf08c89fd27be735504ca2a037ef3b95bf181e231511008556200d3a7e8e2228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
