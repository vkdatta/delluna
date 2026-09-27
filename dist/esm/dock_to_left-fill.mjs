export const name="dock_to_left-fill";
export const id="dl_13238bec5dd134abc421";
export const url=new URL("../icons/dock_to_left-fill.svg?v=ab2acc9ddcb8c97bad0177e98bdef9dbb4f4f69ab8cb754b0de8d372b95fed8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
