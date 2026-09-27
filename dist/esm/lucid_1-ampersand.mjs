export const name="lucid_1-ampersand";
export const id="dl_b34bb932bf5e428f99b9";
export const url=new URL("../icons/lucid_1-ampersand.svg?v=98c616ec8d9a726fcbe518873536ca699c40ad5f1e7a42ac288cdd5b998c06f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
