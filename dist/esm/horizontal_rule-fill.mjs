export const name="horizontal_rule-fill";
export const id="dl_5b0b11743bddb235deb0";
export const url=new URL("../icons/horizontal_rule-fill.svg?v=fdddb9475c7ce4f463ad639662b33f2f2cadba9760748e4e1dd8b62f73422839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
