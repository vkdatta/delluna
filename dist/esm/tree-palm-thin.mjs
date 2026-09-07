export const name="tree-palm-thin";
export const id="dl_a4f65be68ca445458b1b";
export const url=new URL("../icons/T/tree-palm-thin.svg?v=15c2a53702c8236725d58a11af47fa54d05ff40c359512f350f80c6f14db2174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
