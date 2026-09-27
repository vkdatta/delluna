export const name="draw_abstract-fill";
export const id="dl_fc36d433dce3a1caf113";
export const url=new URL("../icons/draw_abstract-fill.svg?v=f3d642568a9161f5602251133adac961a10ea72ff9bfd40ac0165b144ae7473c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
