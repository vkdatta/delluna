export const name="lucid_2-layout-dashboard";
export const id="dl_49fed57dc73f48a2a7f1";
export const url=new URL("../icons/lucid_2-layout-dashboard.svg?v=310563ca6f73e5bb1bfd640d65973cce25ad5e03a2cbaee83bd697ca50a0bb70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
