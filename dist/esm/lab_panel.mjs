export const name="lab_panel";
export const id="dl_112df27c22610e0bdfbd";
export const url=new URL("../icons/lab_panel.svg?v=3638d12de74da5bd03854be970c90176818491cb21cba2f4d73095bb883d01aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
