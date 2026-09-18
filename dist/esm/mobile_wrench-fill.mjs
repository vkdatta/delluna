export const name="mobile_wrench-fill";
export const id="dl_ca402df06a4f486ca99e";
export const url=new URL("../icons/M/mobile_wrench-fill.svg?v=4c4bbf288c2dd52bf0f01ea035a196b8bb2601fd7643c48c53518301ab5817f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
