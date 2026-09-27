export const name="lucid_3-solar-panel";
export const id="dl_1b6242b3fb49404cb7f9";
export const url=new URL("../icons/lucid_3-solar-panel.svg?v=930a895be83b8f19c42793afb1c905594febe6c4331321e6741abede180f78f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
