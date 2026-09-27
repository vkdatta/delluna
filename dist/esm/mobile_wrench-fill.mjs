export const name="mobile_wrench-fill";
export const id="dl_568e1078a45ea0c2142a";
export const url=new URL("../icons/mobile_wrench-fill.svg?v=4c4bbf288c2dd52bf0f01ea035a196b8bb2601fd7643c48c53518301ab5817f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
