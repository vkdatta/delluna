export const name="nest_protect-fill";
export const id="dl_f39c461b1f65f9b3ac4f";
export const url=new URL("../icons/nest_protect-fill.svg?v=ff3b429637be36fe5bf16e9e1005e3981b4798753b35bd670915963e76a0c88e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
