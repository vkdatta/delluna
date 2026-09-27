export const name="mouse-scroll-fill";
export const id="dl_fc73056a6f9c467ab3f6";
export const url=new URL("../icons/mouse-scroll-fill.svg?v=3312f8de15e1b7b9c2c4e49ed42c85f22076bb81ad16b3b0e0d4b584aec1ef2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
