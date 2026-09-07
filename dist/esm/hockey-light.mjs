export const name="hockey-light";
export const id="dl_dae91a9031f24788a413";
export const url=new URL("../icons/hockey-light.svg?v=e3157d93b83b467e216ad1a22fe2b83a25a6393100aa25412ed217ef5f346f13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
