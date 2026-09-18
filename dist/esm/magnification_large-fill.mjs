export const name="magnification_large-fill";
export const id="dl_ca9dfb5035f143de9540";
export const url=new URL("../icons/magnification_large-fill.svg?v=200060712dd46cdea5d0a5d3577c21fea931f7fa2bc15e160c72e4bd7d7a2a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
