export const name="checklist";
export const id="dl_69dc747239864486af85";
export const url=new URL("../icons/checklist.svg?v=9082024eff75ac66d8f8cbe44ffdb876fb6e106b720bbc1f46bdc3a0c825b614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
