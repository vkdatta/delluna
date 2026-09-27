export const name="capture";
export const id="dl_f6e09e8e0286bfd54151";
export const url=new URL("../icons/capture.svg?v=36d605bad93ac0215fffcee65e4459e20a49483c65cc70d6d461357d3291fd75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
