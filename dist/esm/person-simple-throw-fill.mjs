export const name="person-simple-throw-fill";
export const id="dl_c1f66a0d158f46808336";
export const url=new URL("../icons/person-simple-throw-fill.svg?v=0ca0c23b57f26ab71f7c1815dc679b6b927a7b7f6ef6502d2f1c6fecceaf7a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
