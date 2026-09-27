export const name="earbuds_battery";
export const id="dl_f6af06b1bf16cde6b6ef";
export const url=new URL("../icons/earbuds_battery.svg?v=5650c43ced42253d201eb973de917f0f7f42289e20cfb6a3544e8f4943248f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
