export const name="markdown-logo-fill";
export const id="dl_67eef089bdc24128964e";
export const url=new URL("../icons/markdown-logo-fill.svg?v=6a0e8dc7cbcc766af7faf37c5428d3d994f312754676e83d022af3fd32ee20c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
