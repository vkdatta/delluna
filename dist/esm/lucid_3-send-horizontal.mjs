export const name="lucid_3-send-horizontal";
export const id="dl_a97cdcb1a94c43a49d33";
export const url=new URL("../icons/lucid_3-send-horizontal.svg?v=d2c18baae76fe4c714c87fb538301c80535d85751bd368e026d8f64dd0adc85e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
