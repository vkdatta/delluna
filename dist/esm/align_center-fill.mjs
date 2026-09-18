export const name="align_center-fill";
export const id="dl_0f71edabd4504252b94b";
export const url=new URL("../icons/align_center-fill.svg?v=fb9b123c213e345068272ae41b72dfeaf27e2aec0f994aaad987afb5b76b7fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
