export const name="lucid_3-pin-off";
export const id="dl_ad44dc7db6eb48bd99e4";
export const url=new URL("../icons/lucid_3-pin-off.svg?v=5fab63691442efb374d7f5ad14784f9ea5f5bfc58f68636bb3ac0492df1b0dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
