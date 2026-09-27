export const name="lucid_2-house-plus";
export const id="dl_a0fcc4fb9aa24e8c89eb";
export const url=new URL("../icons/lucid_2-house-plus.svg?v=6f46b1772eb27fe148f6bdff0bf6eeb216aa0de5421712aa29daf5e73583375e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
