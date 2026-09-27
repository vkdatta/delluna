export const name="folder_match";
export const id="dl_09b81fac6a51c1d3b556";
export const url=new URL("../icons/folder_match.svg?v=e417afbb0cb22220a0f7c94472513bbcd80116425ec455806bdd9f0254e57925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
