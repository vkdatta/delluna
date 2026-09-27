export const name="lab_panel-fill";
export const id="dl_1e3bd25c1ac0e6a50cf8";
export const url=new URL("../icons/lab_panel-fill.svg?v=9ff612e4f146b85d1ff1c7ef6d30c9651a0de156e85149445b741c46b8657596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
