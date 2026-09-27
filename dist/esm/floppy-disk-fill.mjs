export const name="floppy-disk-fill";
export const id="dl_6319b542b6e945bc9976";
export const url=new URL("../icons/floppy-disk-fill.svg?v=8f1f319a396821478ec40de06623fc5eb874fee7d5927fe733aa642a18cd873b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
