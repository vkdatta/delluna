export const name="intersect-square-fill";
export const id="dl_0f65004866e1489589e2";
export const url=new URL("../icons/intersect-square-fill.svg?v=634a2128d474fb00234111977e170fed8fa588ab89d2ac645f6ea1b4c11e679a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
