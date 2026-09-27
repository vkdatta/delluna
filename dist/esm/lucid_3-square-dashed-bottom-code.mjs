export const name="lucid_3-square-dashed-bottom-code";
export const id="dl_e981aa004fe4410ba929";
export const url=new URL("../icons/lucid_3-square-dashed-bottom-code.svg?v=fd170333b4a51054fa937033889196cf2713d6f6a36fa8821680251dc5a67554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
