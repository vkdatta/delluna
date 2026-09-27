export const name="files";
export const id="dl_2283eff751484c7e891a";
export const url=new URL("../icons/files.svg?v=0377da219e4cc3a0c9204e669c4ec3896713452d9b23c974f4af4b1c377f6b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
