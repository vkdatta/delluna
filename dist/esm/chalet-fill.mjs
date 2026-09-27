export const name="chalet-fill";
export const id="dl_3b457cd44da2523e2fd3";
export const url=new URL("../icons/chalet-fill.svg?v=b4f892545e2bbcd1472517cd1ac83faae1f31360f59cae3b824712fd16baf0cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
