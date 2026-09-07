export const name="close";
export const id="dl_866e83f6bc6144ed898e";
export const url=new URL("../icons/close/close.svg?v=69537e500df396b15902ddaa1ef2300a96ca65b623c4623082c895dc776461fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
