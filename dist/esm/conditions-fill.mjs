export const name="conditions-fill";
export const id="dl_97850a70e65fcd1a8060";
export const url=new URL("../icons/conditions-fill.svg?v=723ea2ea543c9ac20841ee2a716df5933927e278989fd06335dc96f62ba14b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
