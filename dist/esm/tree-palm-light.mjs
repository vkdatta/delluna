export const name="tree-palm-light";
export const id="dl_f096d94df42fe07d70c8";
export const url=new URL("../icons/tree-palm-light.svg?v=9228cf5e5d026b87d83daa280155773df9f3abd54a0ddfa1295453401f831185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
