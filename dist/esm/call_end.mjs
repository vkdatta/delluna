export const name="call_end";
export const id="dl_73f15b046adf432c8e5a";
export const url=new URL("../icons/C/call_end.svg?v=8d612384ea36f2f3461c5e91c825b26e053facb07a4970dd0019a2adfe315402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
