export const name="zoom-out";
export const id="dl_9a9dfb683b3d4611affb";
export const url=new URL("../icons/zoom-out.svg?v=df12ddbbca13cd03aba1ee632022ec0a5a1f3e6b09e81ac134cbf791f68ce62c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
