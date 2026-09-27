export const name="exposure_zero-fill";
export const id="dl_b343a75a21502d0b4960";
export const url=new URL("../icons/exposure_zero-fill.svg?v=48d15f7704cadb9a8480dfa68fea0ddbd920d84c84e3fd7d6df52a05a56bcc07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
