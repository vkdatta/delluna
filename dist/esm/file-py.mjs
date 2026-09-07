export const name="file-py";
export const id="dl_19441fc0aab54a1fa054";
export const url=new URL("../icons/file-py.svg?v=ed118f0813d09c2438a7b9a67d65f5d12dd5afae94b4975a17fc0acd90582ebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
