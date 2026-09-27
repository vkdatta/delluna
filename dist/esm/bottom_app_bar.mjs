export const name="bottom_app_bar";
export const id="dl_b43e409155ae4a9f5594";
export const url=new URL("../icons/bottom_app_bar.svg?v=afe3f9958aaeca6da62521b265d25df8fd4f228b1f935424156f289f1da9969a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
