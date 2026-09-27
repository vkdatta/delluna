export const name="delete_sweep";
export const id="dl_e046b70565aef7fdbce3";
export const url=new URL("../icons/delete_sweep.svg?v=5ee096ac610df09904132589640d6eef93daef855b96baca884cec9fe657d905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
