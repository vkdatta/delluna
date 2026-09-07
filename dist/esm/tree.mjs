export const name="tree";
export const id="dl_f211f1fc69114bb49ee8";
export const url=new URL("../icons/T/tree.svg?v=a4878c574c4ff8fcac43187573f5dfb4cb6788f709314eb47564e2ad6681980f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
