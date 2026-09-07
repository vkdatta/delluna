export const name="bandaids-thin";
export const id="dl_a7a9fa03a46844399eb5";
export const url=new URL("../icons/bandaids-thin.svg?v=607d6fc264aee985d6f0e1f6f485cce5611b07abc1f12f1d68a1435a50c5e778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
