export const name="checklist_rtl";
export const id="dl_45e2882e87eee489dc1c";
export const url=new URL("../icons/checklist_rtl.svg?v=74d0f21fb0bd21c46231abc05efb769ea2df8c424df0215874f55e78c9401d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
