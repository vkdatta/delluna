export const name="barn-thin";
export const id="dl_a05e681f349d4fa6aed4";
export const url=new URL("../icons/barn-thin.svg?v=fb9f76deb1a412d11b10d5476d64d3247a3aa7f3f12eff8a357c9a8e8dd92408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
