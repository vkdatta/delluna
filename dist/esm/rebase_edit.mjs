export const name="rebase_edit";
export const id="dl_0e27dac7936a3afb4395";
export const url=new URL("../icons/rebase_edit.svg?v=4919fc2bcc5e437b6fb6d58187710b9aa2fb3a49c241e31358ff5dcec6f5449b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
