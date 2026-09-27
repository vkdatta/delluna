export const name="lightbulb_circle-fill";
export const id="dl_3f7c53c2908008a29c29";
export const url=new URL("../icons/lightbulb_circle-fill.svg?v=dae9c23d21cce1bcbfcb0b7de897916e20f87b6a94d86483d2ada4963ac65317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
