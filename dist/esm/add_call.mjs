export const name="add_call";
export const id="dl_6583525a6eda5a85072b";
export const url=new URL("../icons/add_call.svg?v=309f7268f8abc690e2529e715465b878ad88c7b2995ce526fc91d8b6f71019f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
