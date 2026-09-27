export const name="preview-fill";
export const id="dl_d5ee3f2adcf66309b371";
export const url=new URL("../icons/preview-fill.svg?v=25a2419bd4f5663f3fdd18799fda25f00a1c7c959e3690b9fbf9dab6a421c76a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
