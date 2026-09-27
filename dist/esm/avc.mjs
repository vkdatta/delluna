export const name="avc";
export const id="dl_feac97ce0ed698880ad8";
export const url=new URL("../icons/avc.svg?v=ec044f98b0dbeaacb211b54747b41ac2ec109651f40c0227e50056efcab756da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
