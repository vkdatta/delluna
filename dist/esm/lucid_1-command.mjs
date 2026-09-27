export const name="lucid_1-command";
export const id="dl_13a166a7c6ad4e109925";
export const url=new URL("../icons/lucid_1-command.svg?v=264f874c0c23fc322974245d4f3cf51bdc8489e4c10caa44117b4e8c52f2863d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
