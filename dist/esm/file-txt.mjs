export const name="file-txt";
export const id="dl_1a10b15c92714a3dbb55";
export const url=new URL("../icons/file-txt.svg?v=efc638fc0a8302b9d4178d3f00c69a1b71cde2214d5d631fe484dc30170f255d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
