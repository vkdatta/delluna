export const name="lucid_2-file-image";
export const id="dl_b9e00dd4887147c3a595";
export const url=new URL("../icons/lucid_2-file-image.svg?v=5e1fab62ed33d048ad39345badc9d6283edccdf6303bed20f0a0c0f2d37d842d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
