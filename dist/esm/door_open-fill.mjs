export const name="door_open-fill";
export const id="dl_e419db78f2146d5e3c14";
export const url=new URL("../icons/door_open-fill.svg?v=a2640eb6a387e5d3d6e769dfa7cade1f8c08ee01a17f163c5d217cdf715aba71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
