export const name="lucid_3-maximize";
export const id="dl_023095573a1e4eca8591";
export const url=new URL("../icons/lucid_3-maximize.svg?v=06740ba27b9baa52b83e2a7f1aa25f491d9b08d36d600540f23b7913d29353bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
