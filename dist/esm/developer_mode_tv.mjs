export const name="developer_mode_tv";
export const id="dl_acfbf383edc935accad7";
export const url=new URL("../icons/developer_mode_tv.svg?v=a2863c20027f44fc2fa88428a3325b36f4f3aca5d96305ca414dac5baad4408b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
