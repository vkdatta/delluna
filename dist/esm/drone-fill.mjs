export const name="drone-fill";
export const id="dl_495ae1dea80645b0a7a1";
export const url=new URL("../icons/drone-fill.svg?v=0cfeb14edffe503aebb2a5cd51eae0ff39c7daecf84353822faf5a2ad1dd9e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
