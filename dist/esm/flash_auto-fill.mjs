export const name="flash_auto-fill";
export const id="dl_ba6c4ca48f804d3e8f67";
export const url=new URL("../icons/F/flash_auto-fill.svg?v=082ccb3c2280669078ccc2111dcbd669a1061c6236e1bbc9ea49bdab5f5fe3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
