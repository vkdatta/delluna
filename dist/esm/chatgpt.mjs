export const name="chatgpt";
export const id="dl_e558cba2489d8cafa87c";
export const url=new URL("../icons/chatgpt.svg?v=a3871df4df947a3679779fe164b15a0023fde48011ef4c1f60f0c64d29c23517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
