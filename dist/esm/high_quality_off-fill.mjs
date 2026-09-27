export const name="high_quality_off-fill";
export const id="dl_2ebe0fb77571572ced90";
export const url=new URL("../icons/high_quality_off-fill.svg?v=8d0992f369b5af38572e510c1ab7df987f27228f20ab990f3f547d64673c3bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
