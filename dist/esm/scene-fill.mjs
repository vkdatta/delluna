export const name="scene-fill";
export const id="dl_cd7d8e417a7b2b2a6f8e";
export const url=new URL("../icons/scene-fill.svg?v=f7e029b3b8cf1af429fa8ca32773afa317b5205a09388529ce42fe768cee1be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
